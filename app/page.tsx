"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WelcomeSection } from "@/components/welcome-section"
import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { DetailsSection } from "@/components/details-section"
import { RSVPForm } from "@/components/rsvp-form"
import { MusicPlayer } from "@/components/music-player"
import { Footer } from "@/components/footer"

export default function InvitationPage() {
  const [showInvitation, setShowInvitation] = useState(false)

  const eventConfig = {
    birthdayBoyName: "Valentino",
    age: 11,
    eventDate: new Date("2026-05-17T15:00:00"),
    venue: {
      name: "Club Atlético Belgrano",
      address: "Av. Arturo Orgaz 550, Córdoba",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Arturo+Orgaz+550,+Córdoba" 
    },
    dressCode: "¡Vení con la camiseta argentina!",
    whatsappNumber: "5493512345678",
    parentName: "Mamá de Valentino"
  }

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* 1. Sección de Bienvenida */}
      <WelcomeSection onEnter={() => setShowInvitation(true)} />

      {/* 2. Contenido de la Invitación */}
      <AnimatePresence>
        {showInvitation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <HeroSection 
              name={eventConfig.birthdayBoyName} 
              age={eventConfig.age} 
            />

            <CountdownTimer targetDate={eventConfig.eventDate} />

            <DetailsSection 
              venue={eventConfig.venue}
              dressCode={eventConfig.dressCode}
              eventDate={eventConfig.eventDate}
            />

            <RSVPForm 
              birthdayBoyName={eventConfig.birthdayBoyName}
              whatsappNumber={eventConfig.whatsappNumber}
              parentName={eventConfig.parentName}
            />

            <Footer name={eventConfig.birthdayBoyName} />

            {/* Pasamos showInvitation para activar el autoplay al entrar */}
            <MusicPlayer shouldPlay={showInvitation} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}