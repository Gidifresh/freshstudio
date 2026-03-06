"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, MapPin, Bed, Bath, Maximize } from "lucide-react"
import { useFavorites } from "@/lib/favorites-context"
import { formatPrice, type Property } from "@/lib/data"

export function PropertyCard({ property }: { property: Property }) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const fav = isFavorite(property.id)

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="luxury-card overflow-hidden rounded-2xl border border-border bg-card">
        <div className="image-zoom relative aspect-[4/3]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="rounded-lg bg-gold px-3 py-1 text-xs font-semibold text-navy">
              {property.status}
            </span>
            <span className="rounded-lg bg-navy/80 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
              {property.type}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleFavorite(property.id)
            }}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm transition-colors hover:bg-card"
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-4 w-4 transition-colors ${fav ? "fill-gold text-gold" : "text-foreground"}`} />
          </button>
          <div className="absolute bottom-4 left-4">
            <p className="font-serif text-2xl font-bold text-primary-foreground drop-shadow-lg">
              {formatPrice(property.price)}
            </p>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-1 group-hover:text-gold transition-colors">
            {property.title}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span className="text-sm">{property.location}</span>
          </div>
          <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-gold" />
              <span className="text-sm text-muted-foreground">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-gold" />
              <span className="text-sm text-muted-foreground">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="h-4 w-4 text-gold" />
              <span className="text-sm text-muted-foreground">{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
