"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Navigation, ZoomIn, ZoomOut } from "lucide-react"

interface PropertyMapProps {
  location: string
  area: string
  className?: string
}

// Lagos area coordinates
const areaCoordinates: Record<string, { lat: number; lng: number }> = {
  "Lekki": { lat: 6.4474, lng: 3.4712 },
  "Ikoyi": { lat: 6.4541, lng: 3.4346 },
  "Victoria Island": { lat: 6.4281, lng: 3.4219 },
  "Ajah": { lat: 6.4698, lng: 3.5852 },
  "Banana Island": { lat: 6.4650, lng: 3.4350 },
  "Eko Atlantic": { lat: 6.4100, lng: 3.4100 },
}

export function PropertyMap({ location, area, className = "" }: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(14)
  const [isLoaded, setIsLoaded] = useState(false)

  const coords = areaCoordinates[area] || areaCoordinates["Lekki"]

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 1, 18))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 1, 10))

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location + ", Lagos, Nigeria")}`
    window.open(url, "_blank")
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border ${className}`}>
      {/* Map Container */}
      <div
        ref={mapRef}
        className="relative aspect-[16/9] bg-navy/5"
        style={{
          backgroundImage: `url("https://api.mapbox.com/styles/v1/mapbox/light-v11/static/${coords.lng},${coords.lat},${zoom},0/800x450?access_token=pk.placeholder")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/10 via-transparent to-gold/10" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Location Pin */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative">
            <div className="absolute -bottom-1 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-gold/30 animate-ping" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-lg shadow-gold/30">
              <MapPin className="h-7 w-7 text-navy" />
            </div>
            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-gold" />
          </div>
        </div>

        {/* Location Label */}
        <div
          className={`absolute left-1/2 top-1/2 mt-8 -translate-x-1/2 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="rounded-xl bg-card/95 px-4 py-2 shadow-lg backdrop-blur-sm border border-border">
            <p className="whitespace-nowrap text-sm font-semibold text-foreground">{location}</p>
            <p className="text-xs text-muted-foreground">{area}, Lagos</p>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/95 shadow-lg backdrop-blur-sm transition-all hover:bg-card border border-border"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-card/95 shadow-lg backdrop-blur-sm transition-all hover:bg-card border border-border"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Open in Maps Button */}
        <button
          onClick={openInMaps}
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-lg transition-all hover:bg-gold-light hover:shadow-xl"
        >
          <Navigation className="h-4 w-4" />
          Open in Maps
        </button>

        {/* Area indicator */}
        <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl bg-card/95 px-3 py-2 shadow-lg backdrop-blur-sm border border-border">
          <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-medium text-foreground">{area}</span>
        </div>
      </div>
    </div>
  )
}
