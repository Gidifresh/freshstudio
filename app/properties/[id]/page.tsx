"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { MapPin, Bed, Bath, Maximize, Calendar, Heart, Share2, ChevronLeft, ChevronRight, Check, Phone, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { PropertyMap } from "@/components/property-map"
import { properties, agents, formatPrice } from "@/lib/data"
import { useFavorites } from "@/lib/favorites-context"

export default function PropertyDetailPage() {
  const params = useParams()
  const property = properties.find((p) => p.id === params.id)
  const { toggleFavorite, isFavorite } = useFavorites()
  const [currentImage, setCurrentImage] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  if (!property) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground">Property Not Found</h1>
            <p className="mt-4 text-muted-foreground">The property you are looking for does not exist.</p>
            <Button asChild className="mt-6 bg-gold text-navy hover:bg-gold-light rounded-xl">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const agent = agents.find((a) => a.id === property.agentId) || agents[0]
  const similar = properties.filter((p) => p.id !== property.id && p.area === property.area).slice(0, 3)
  const fav = isFavorite(property.id)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-navy pt-24 pb-6">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/properties" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-gold">
            <ArrowLeft className="h-4 w-4" />
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-navy pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              {property.images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${i === currentImage ? "opacity-100" : "opacity-0"}`}
                >
                  <Image src={img} alt={`${property.title} - Image ${i + 1}`} fill className="object-cover" priority={i === 0} />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors" aria-label="Previous image">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors" aria-label="Next image">
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {property.images.map((_, i) => (
                <button key={i} onClick={() => setCurrentImage(i)} className={`h-2 rounded-full transition-all ${i === currentImage ? "w-8 bg-gold" : "w-2 bg-primary-foreground/40"}`} aria-label={`View image ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {property.images.map((img, i) => (
              <button key={i} onClick={() => setCurrentImage(i)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl transition-all ${i === currentImage ? "ring-2 ring-gold" : "opacity-60 hover:opacity-100"}`}>
                <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="rounded-lg bg-gold px-3 py-1 text-xs font-semibold text-navy">{property.status}</span>
                    <span className="rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-foreground">{property.type}</span>
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{property.title}</h1>
                  <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors ${fav ? "border-gold bg-gold/10" : "border-border hover:border-gold"}`}
                    aria-label={fav ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className={`h-5 w-5 ${fav ? "fill-gold text-gold" : "text-foreground"}`} />
                  </button>
                  <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border hover:border-gold transition-colors" aria-label="Share property">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <p className="mt-2 font-serif text-3xl font-bold text-gold">{formatPrice(property.price)}</p>

              {/* Key Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Bed, label: "Bedrooms", value: property.bedrooms },
                  { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                  { icon: Maximize, label: "Square Feet", value: property.sqft.toLocaleString() },
                  { icon: Calendar, label: "Year Built", value: property.yearBuilt },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-border bg-card p-4 text-center">
                    <Icon className="mx-auto h-6 w-6 text-gold" />
                    <p className="mt-2 text-lg font-bold text-foreground">{value}</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">About This Property</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Property Features</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 rounded-xl bg-secondary p-3">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Amenities</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 rounded-xl bg-secondary p-3">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Location</h2>
                <div className="mt-4">
                  <PropertyMap location={property.location} area={property.area} />
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div className="mt-10">
                <MortgageCalculator defaultPrice={property.price} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-6">
                {/* Agent Card */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">Listed By</h3>
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Image src={agent.image} alt={agent.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{agent.name}</p>
                      <p className="text-sm text-gold">{agent.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                      <Phone className="h-4 w-4" />
                      {agent.phone}
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
                      <Mail className="h-4 w-4" />
                      {agent.email}
                    </a>
                  </div>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button onClick={() => setShowContactForm(!showContactForm)} className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl w-full">
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy rounded-xl w-full">
                      Schedule Viewing
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <div className="rounded-2xl border border-border bg-card p-6 animate-in slide-in-from-top-2">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4">Send a Message</h3>
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Your Name" className="h-11 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none" />
                      <input type="email" placeholder="Email Address" className="h-11 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none" />
                      <input type="tel" placeholder="Phone Number" className="h-11 rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none" />
                      <textarea placeholder="I'm interested in this property..." rows={4} className="rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none resize-none" />
                      <Button type="submit" className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl">
                        Send Message
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similar.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Similar Properties</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {similar.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
