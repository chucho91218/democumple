"use client"

import { MapPin, Calendar, Shirt, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DetailsSectionProps {
  venue: {
    name: string
    address: string
    mapsUrl: string
  }
  dressCode: string
  eventDate: Date
}

export function DetailsSection({ venue, dressCode, eventDate }: DetailsSectionProps) {
  const details = [
    {
      icon: MapPin,
      title: "¿Dónde?",
      content: (
        <div className="space-y-3">
          <p className="font-sans font-semibold text-deep-blue text-lg">{venue.name}</p>
          <p className="font-sans text-deep-blue/70">{venue.address}</p>
          <Button
            asChild
            className="mt-4 bg-deep-blue hover:bg-deep-blue/90 text-cream font-sans font-medium tracking-wide"
          >
            <a 
              href={venue.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Ver Ubicación en Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      )
    },
    {
      icon: Calendar,
      title: "¿Cuándo?",
      content: (
        <div className="space-y-2">
          <p className="font-sans font-semibold text-deep-blue text-lg capitalize">
            {eventDate.toLocaleDateString("es-AR", {
              weekday: "long",
              day: "numeric",
              month: "long"
            })}
          </p>
       <p className="font-sans text-3xl font-bold text-gold">
  03:00 p. m.
</p>
          <p className="font-sans text-deep-blue/60 text-sm">
            ¡Te esperamos puntual!
          </p>
        </div>
      )
    },
    {
      icon: Shirt,
      title: "Dress Code",
      content: (
        <div className="space-y-3">
          <p className="font-sans text-deep-blue text-lg">{dressCode}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {/* Argentina flag colors indicator */}
            <div className="flex rounded-md overflow-hidden shadow-sm">
              <div className="w-8 h-6 bg-celeste" />
              <div className="w-8 h-6 bg-white" />
              <div className="w-8 h-6 bg-celeste" />
            </div>
          </div>
          <p className="font-sans text-deep-blue/60 text-sm">
            Ropa cómoda para jugar
          </p>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-blue">
            Los <span className="text-gold">Detalles</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold" />
            <div className="w-2 h-2 bg-celeste rounded-full" />
            <div className="w-12 h-px bg-gold" />
          </div>
        </div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {details.map((detail, index) => (
            <div
              key={detail.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card rounded-xl p-8 border border-gold/30 hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-md h-full">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-gold to-transparent" />
                  <div className="absolute top-0 right-0 w-12 h-px bg-gradient-to-l from-gold to-transparent" />
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-celeste/20 flex items-center justify-center border-2 border-celeste/30 group-hover:border-gold/50 transition-colors">
                    <detail.icon className="w-7 h-7 text-deep-blue" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-deep-blue text-center mb-4">
                  {detail.title}
                </h3>

                {/* Content */}
                <div className="text-center">
                  {detail.content}
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
