"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) return null

  const units = [
    { value: timeLeft.days, label: "DÍAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MINS" },
    { value: timeLeft.seconds, label: "SEGS" }
  ]

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] text-deep-blue/40 font-bold uppercase mb-8">
          CUENTA REGRESIVA
        </p>
        
        <div className="flex justify-center items-center gap-3 md:gap-6">
          {units.map((unit, idx) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="relative group">
                {/* Estilo Tablero Scoreboard */}
                <div className="bg-deep-blue w-20 h-24 md:w-32 md:h-40 rounded-sm flex items-center justify-center shadow-2xl overflow-hidden border border-white/5">
                  {/* Línea divisoria del tablero */}
                  <div className="absolute w-full h-[1px] bg-black/20 top-1/2 left-0 z-10" />
                  
                  <span className="text-4xl md:text-7xl font-bold text-cream tabular-nums tracking-tighter">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </div>
                
                <p className="mt-4 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-deep-blue/60 uppercase">
                  {unit.label}
                </p>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  )
}