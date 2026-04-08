"use client"

import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-24 px-6 bg-cream text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Instagram Link */}
        <a 
          href="https://instagram.com/festa_invitaciones" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-deep-blue/40 uppercase hover:text-deep-blue transition-colors mb-12"
        >
          <Instagram size={14} strokeWidth={2.5} />
          @festa_invitaciones
        </a>

        {/* Slogan Principal */}
        <h3 className="text-deep-blue text-[11px] md:text-[13px] font-bold tracking-[0.5em] uppercase mb-4">
          DISEÑO EXCLUSIVO PARA EVENTOS
        </h3>

        {/* Créditos Festa */}
        <p className="font-serif italic text-deep-blue/50 text-sm md:text-base">
          Hecho con amor por Festa
        </p>
        
      </div>
    </footer>
  )
}