"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { properties, formatPrice } from "@/lib/data"

const showcaseProperties = properties.filter((p) => p.featured).slice(0, 4)

export function PropertyShowcase() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % showcaseProperties.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + showcaseProperties.length) % showcaseProperties.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const property = showcaseProperties[current]

  return (
    <section className="py-24 bg-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Exclusive Collection</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Luxury Property Showcase
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            {showcaseProperties.map((prop, i) => (
              <div
                key={prop.id}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

            <div className="absolute inset-0 flex items-end p-8 md:items-center md:p-16">
              <div className="max-w-lg">
                <span className="inline-block rounded-lg bg-gold px-3 py-1 text-xs font-semibold text-navy mb-4">
                  Featured
                </span>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground md:text-4xl">
                  {property.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 text-primary-foreground/80">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <p className="mt-2 font-serif text-3xl font-bold text-gold md:text-4xl">
                  {formatPrice(property.price)}
                </p>
                <div className="mt-4 flex items-center gap-6 text-primary-foreground/70">
                  <span className="text-sm">{property.bedrooms} Bedrooms</span>
                  <span className="text-sm">{property.bathrooms} Bathrooms</span>
                  <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
                </div>
                <Button asChild className="mt-6 bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl px-8">
                  <Link href={`/properties/${property.id}`}>View Property</Link>
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground transition-colors hover:bg-card/40"
            aria-label="Previous property"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground transition-colors hover:bg-card/40"
            aria-label="Next property"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {showcaseProperties.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-gold" : "w-2 bg-primary-foreground/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
