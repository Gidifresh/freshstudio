import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold">
                <span className="font-serif text-lg font-bold text-navy">LH</span>
              </div>
              <span className="font-serif text-xl font-bold text-primary-foreground">
                Lagos<span className="text-gold">Homes</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Your trusted partner in finding premium luxury properties across Lagos, Nigeria. We connect discerning buyers with exceptional homes.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/agents", label: "Our Agents" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold">Popular Areas</h3>
            <ul className="flex flex-col gap-3">
              {["Lekki", "Ikoyi", "Victoria Island", "Ajah", "Banana Island"].map((area) => (
                <li key={area}>
                  <Link href={`/properties?area=${area}`} className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gold">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-sm text-primary-foreground/60">
                  14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+2347089059658" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    +234 708 905 9658
                  </a>
                  <a href="tel:+2347044954708" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                    +234 704 495 4708
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:info@lagoshomes.com" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">
                  info@lagoshomes.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            2026 LagosHomes. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-primary-foreground/40 transition-colors hover:text-gold">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
