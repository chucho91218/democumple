"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface MusicPlayerProps {
  shouldPlay: boolean
}

export function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Inicializar audio
  useEffect(() => {
    const audio = new Audio("/music/background.mp3")
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  // Escuchar cuando el estado de la invitación cambia a true
  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      const playAudio = async () => {
        try {
          await audioRef.current?.play()
          setIsPlaying(true)
        } catch (error) {
          console.log("Autoplay bloqueado:", error)
        }
      }
      playAudio()
    }
  }, [shouldPlay])

  const toggleMusic = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 group transition-transform active:scale-95"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold to-dark-gold rounded-full" />
      
      <div className="relative w-14 h-14 bg-deep-blue rounded-full flex items-center justify-center shadow-lg hover:shadow-xl m-0.5">
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border border-celeste/30 animate-ping" style={{ animationDuration: "2s" }} />
          </div>
        )}

        <div className="relative z-10">
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-cream" />
          ) : (
            <VolumeX className="w-6 h-6 text-cream/70" />
          )}
        </div>
      </div>
    </button>
  )
}