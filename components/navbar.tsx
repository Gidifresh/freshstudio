"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/lib/favorites-context"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/agents", label: "Agents" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count } = useFavorites()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
            <span className="font-serif text-lg font-bold text-navy">LH</span>
          </div>
          <span className="font-serif text-xl font-bold text-primary-foreground">
            Lagos<span className="text-gold">Homes</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="gold-underline text-sm font-medium text-primary-foreground/70 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/properties?favorites=true" className="relative text-primary-foreground/70 transition-colors hover:text-gold">
            <Heart className={`h-5 w-5 transition-all ${count > 0 ? 'text-gold' : ''}`} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy animate-pulse">
                {count}
              </span>
            )}
          </Link>
          <Button asChild className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-lg">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-navy-light hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-navy-light">
              <Link
                href="/properties?favorites=true"
                onClick={() => setMobileOpen(false)}
                className="relative text-primary-foreground/70 hover:text-gold"
              >
                <Heart className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                    {count}
                  </span>
                )}
              </Link>
              <Button asChild className="flex-1 bg-gold text-navy hover:bg-gold-light font-semibold rounded-lg">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
