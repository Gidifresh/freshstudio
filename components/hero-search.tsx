"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const locations = ["All Locations", "Lekki", "Ikoyi", "Victoria Island", "Ajah", "Banana Island"]
const priceRanges = ["Any Price", "Under ₦50M", "₦50M - ₦100M", "₦100M - ₦300M", "₦300M - ₦500M", "Over ₦500M"]
const bedroomOptions = ["Any Beds", "1+", "2+", "3+", "4+", "5+", "6+"]
const typeOptions = ["All Types", "Villa", "Apartment", "Penthouse", "Duplex", "Mansion", "Terrace", "Detached"]

export function HeroSearch() {
  const router = useRouter()
  const [location, setLocation] = useState("All Locations")
  const [price, setPrice] = useState("Any Price")
  const [beds, setBeds] = useState("Any Beds")
  const [type, setType] = useState("All Types")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location !== "All Locations") params.set("area", location)
    if (beds !== "Any Beds") params.set("beds", beds.replace("+", ""))
    if (type !== "All Types") params.set("type", type)
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-2xl bg-card/95 p-4 shadow-2xl backdrop-blur-md border border-gold/20 animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <SelectField label="Location" value={location} options={locations} onChange={setLocation} />
          <SelectField label="Price Range" value={price} options={priceRanges} onChange={setPrice} />
          <SelectField label="Bedrooms" value={beds} options={bedroomOptions} onChange={setBeds} />
          <SelectField label="Property Type" value={type} options={typeOptions} onChange={setType} />
          <Button
            onClick={handleSearch}
            className="h-full min-h-14 bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl text-base gap-2 transition-all hover:shadow-lg hover:shadow-gold/30"
          >
            <Search className="h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

function SelectField({
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
    <div className="relative">
      <label className="sr-only">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 w-full appearance-none rounded-xl border border-border bg-card px-4 pr-10 text-sm font-medium text-foreground transition-colors focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}
