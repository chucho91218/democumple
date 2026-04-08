"use client"

import { useState } from "react"
import { MessageCircle, Minus, Plus, Send, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface RSVPFormProps {
  birthdayBoyName: string
  whatsappNumber: string
  parentName: string
}

export function RSVPForm({ birthdayBoyName, whatsappNumber, parentName }: RSVPFormProps) {
  const [guestName, setGuestName] = useState("")
  const [guestCount, setGuestCount] = useState(1)

  const incrementGuests = () => {
    if (guestCount < 10) setGuestCount(prev => prev + 1)
  }

  const decrementGuests = () => {
    if (guestCount > 1) setGuestCount(prev => prev - 1)
  }

  const handleWhatsAppConfirm = () => {
    if (!guestName.trim()) {
      alert("Por favor, ingresá tu nombre")
      return
    }

    const message = encodeURIComponent(
      `¡Hola ${parentName}! Confirmo asistencia para *${guestName.trim()}* + ${guestCount} invitado${guestCount > 1 ? "s" : ""} para el cumple de *${birthdayBoyName}* ⚽🎉`
    )
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-cream to-celeste/10">
      <div className="max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue mb-2">
            ¿Venís a <span className="text-gold">festejar</span>?
          </h2>
          <p className="font-sans text-deep-blue/60">
            Confirmá tu asistencia
          </p>
        </div>

        {/* Form Card */}
        <div className="relative">
          {/* Gold frame effect */}
          <div className="absolute -inset-px bg-gradient-to-br from-gold via-dark-gold to-gold rounded-2xl" />
          
          <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg">
            {/* WhatsApp badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
              <MessageCircle className="w-4 h-4" />
              <span className="font-sans text-sm font-medium">WhatsApp</span>
            </div>

            <div className="space-y-8 mt-4">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="font-sans text-sm font-medium text-deep-blue/70 block">
                  Nombre y Apellido
                </label>
                <Input
                  type="text"
                
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="h-14 text-lg border-2 border-celeste/30 focus:border-gold bg-cream/50 placeholder:text-deep-blue/30 text-deep-blue rounded-xl"
                />
              </div>

              {/* Guest Counter */}
              <div className="space-y-2">
                
                
                  
               
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleWhatsAppConfirm}
                className="w-full h-14 bg-deep-blue hover:bg-deep-blue/90 text-cream font-sans font-semibold text-lg tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <span className="flex items-center gap-3">
                  Confirmar Asistencia
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

             
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/40" />
          </div>
        </div>
    
    </section>
  )
}
