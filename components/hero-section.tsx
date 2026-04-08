"use client"

import { Star } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  name: string
  age: number
}

export function HeroSection({ name, age }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-celeste/10" />
      
      {/* Subtle diagonal stripes (Argentina flag inspired) */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            oklch(0.75 0.12 230) 40px,
            oklch(0.75 0.12 230) 80px
          )`
        }} />
      </div>
      
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        {/* Small decorative stars */}
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-4 h-4 text-gold fill-gold" />
          <Star className="w-5 h-5 text-gold fill-gold" />
          <Star className="w-4 h-4 text-gold fill-gold" />
        </div>
        
        {/* Photo Frame */}
        <div className="relative mb-10">
          {/* Gold frame outer */}
          <div className="absolute -inset-3 bg-gradient-to-br from-gold via-dark-gold to-gold rounded-2xl opacity-80" />
          {/* Deep blue inner frame */}
          <div className="absolute -inset-1.5 bg-deep-blue rounded-xl" />
          {/* Photo container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden bg-celeste/20">
            <Image
              src="/image.png"
              alt={`Foto de ${name}`}
              fill
              className="object-cover z-10"
              priority
            />
          </div>
          {/* Corner accents */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-gold" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-gold" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-gold" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-gold" />
        </div>
        
        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-deep-blue mb-4 tracking-tight text-balance">
          <span className="block text-gold">¡Mis {age} años!</span>
        </h1>
        
        {/* Name */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-blue mb-6 italic">
          {name}
        </h2>
        
        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-deep-blue/70 max-w-md mx-auto leading-relaxed">
          Estás invitado a celebrar este día tan especial conmigo
        </p>
        
        {/* Decorative line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 bg-celeste rounded-full" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>
        
        
      </div>
    </section>
  )
}
