"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WelcomeSectionProps {
  onEnter: () => void
}

export function WelcomeSection({ onEnter }: WelcomeSectionProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleStart = () => {
    setIsVisible(false)
    setTimeout(onEnter, 900)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-cream font-serif">
          
          {/* Panel Superior - Solapado 0.5% para borrar la línea */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="absolute top-0 left-0 w-full h-[50.5%] bg-cream flex flex-col items-center justify-end pb-28 md:pb-32"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-6"
            >
              <h2 className="text-deep-blue text-5xl md:text-7xl mb-2 tracking-tight">¡BIENVENIDOS!</h2>
              <p className="text-deep-blue/60 text-[10px] md:text-xs font-sans font-bold tracking-[0.4em] uppercase">
                A LA FIESTA DE VALENTINO
              </p>
            </motion.div>
          </motion.div>
          
          {/* Panel Inferior - Solapado 0.5% */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
            className="absolute bottom-0 left-0 w-full h-[50.5%] bg-cream flex flex-col items-center justify-start pt-28 md:pt-32"
          >
            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.05 }}
              className="px-12 py-3 border-2 border-deep-blue text-deep-blue font-sans font-bold text-xs uppercase tracking-[0.3em] hover:bg-deep-blue hover:text-cream transition-all duration-500 rounded-full shadow-lg"
            >
              Entrar
            </motion.button>
          </motion.div>

          {/* Escudo Central - Independiente de los paneles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="relative z-[110] w-32 h-32 md:w-48 md:h-48 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl" />
            <img 
              src="/afa-shield.png" 
              alt="Escudo AFA" 
              className="w-full h-full object-contain relative z-10 drop-shadow-xl"
            />
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  )
}