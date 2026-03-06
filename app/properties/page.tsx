"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, Grid3X3, LayoutList, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/data"
import { useFavorites } from "@/lib/favorites-context"

const locationOptions = ["All", "Lekki", "Ikoyi", "Victoria Island", "Ajah"]
const typeOptions = ["All", "Villa", "Apartment", "Penthouse", "Duplex", "Mansion", "Terrace", "Detached"]
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₦50M", min: 0, max: 50000000 },
  { label: "₦50M - ₦100M", min: 50000000, max: 100000000 },
  { label: "₦100M - ₦300M", min: 100000000, max: 300000000 },
  { label: "₦300M - ₦500M", min: 300000000, max: 500000000 },
  { label: "Over ₦500M", min: 500000000, max: Infinity },
]
const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+", "6+"]

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Navbar />
        <section className="bg-navy pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Collection</span>
            <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl">Luxury Properties</h1>
          </div>
        </section>
        <section className="py-24 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
        </section>
        <Footer />
      </main>
    }>
      <PropertiesContent />
    </Suspense>
  )
}

function PropertiesContent() {
  const searchParams = useSearchParams()
  const { isFavorite } = useFavorites()

  const [area, setArea] = useState(searchParams.get("area") || "All")
  const [type, setType] = useState(searchParams.get("type") || "All")
  const [priceRange, setPriceRange] = useState("Any Price")
  const [beds, setBeds] = useState(searchParams.get("beds") ? `${searchParams.get("beds")}+` : "Any")
  const [showFavorites, setShowFavorites] = useState(searchParams.get("favorites") === "true")
  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    let result = properties

    if (showFavorites) {
      result = result.filter((p) => isFavorite(p.id))
    }

    if (area !== "All") {
      result = result.filter((p) => p.area === area)
    }

    if (type !== "All") {
      result = result.filter((p) => p.type === type)
    }

    const range = priceRanges.find((r) => r.label === priceRange)
    if (range && range.label !== "Any Price") {
      result = result.filter((p) => p.price >= range.min && p.price < range.max)
    }

    if (beds !== "Any") {
      const minBeds = parseInt(beds.replace("+", ""))
      result = result.filter((p) => p.bedrooms >= minBeds)
    }

    return result
  }, [area, type, priceRange, beds, showFavorites, isFavorite])

  const visibleProperties = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const activeFilters = [area !== "All" && area, type !== "All" && type, priceRange !== "Any Price" && priceRange, beds !== "Any" && `${beds} Beds`, showFavorites && "Favorites"].filter(Boolean)

  const clearFilters = () => {
    setArea("All")
    setType("All")
    setPriceRange("Any Price")
    setBeds("Any")
    setShowFavorites(false)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Collection</span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl">
            {showFavorites ? "Your Saved Properties" : "Luxury Properties"}
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/60 leading-relaxed">
            Browse our curated selection of premium properties across Lagos&apos;s most desirable neighborhoods.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-40 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 rounded-xl border-border"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilters.length > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                    {activeFilters.length}
                  </span>
                )}
              </Button>

              <Button
                variant={showFavorites ? "default" : "outline"}
                onClick={() => setShowFavorites(!showFavorites)}
                className={`rounded-xl ${showFavorites ? "bg-gold text-navy hover:bg-gold-light" : "border-border"}`}
              >
                Favorites
              </Button>

              {activeFilters.length > 0 && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-3.5 w-3.5" />
                  Clear all
                </button>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
            </p>
          </div>

          {showFilters && (
            <div className="mt-4 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2 lg:grid-cols-4 animate-in slide-in-from-top-2">
              <FilterSelect label="Location" value={area} options={locationOptions} onChange={setArea} />
              <FilterSelect label="Property Type" value={type} options={typeOptions} onChange={setType} />
              <FilterSelect label="Price Range" value={priceRange} options={priceRanges.map((r) => r.label)} onChange={setPriceRange} />
              <FilterSelect label="Bedrooms" value={beds} options={bedroomOptions} onChange={setBeds} />
            </div>
          )}

          {activeFilters.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <span key={String(filter)} className="inline-flex items-center gap-1 rounded-lg bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {String(filter)}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-6">
                <Grid3X3 className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">No Properties Found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your filters to see more results.</p>
              <Button onClick={clearFilters} className="mt-6 bg-gold text-navy hover:bg-gold-light rounded-xl">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              {hasMore && (
                <div className="mt-12 text-center">
                  <Button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-gold text-gold hover:bg-gold hover:text-navy px-12"
                  >
                    Load More Properties
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
