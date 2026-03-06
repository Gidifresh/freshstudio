import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Users, Award, TrendingUp, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyCard } from "@/components/property-card"
import { HeroSearch } from "@/components/hero-search"
import { PropertyShowcase } from "@/components/property-showcase"
import { Testimonials } from "@/components/testimonials"
import { properties, agents, areas } from "@/lib/data"

const featuredProperties = properties.filter((p) => p.featured).slice(0, 6)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury home in Lagos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-6 py-2 text-sm font-medium text-gold backdrop-blur-sm animate-fade-in-down">
            The Premier Luxury Real Estate Platform in Lagos
          </span>
          <h1 className="mt-8 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Find Premium{" "}
            <span className="text-gradient-gold">Homes</span>{" "}
            in Lagos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Discover an exclusive collection of luxury properties in Lagos&apos;s most prestigious neighborhoods. From waterfront villas to modern penthouses, find your perfect home.
          </p>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <HeroSearch />
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 stagger-children">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">500+ Properties</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">1,200+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gold" />
              <span className="text-sm font-medium">98% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Featured Listings</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Premium Properties
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-2 rounded-xl border-gold text-gold hover:bg-gold hover:text-navy">
              <Link href="/properties">
                View All Properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-children">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Showcase Slider */}
      <PropertyShowcase />

      {/* Popular Areas */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Explore Lagos</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Popular Neighborhoods
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Discover luxury living across Lagos&apos;s most sought-after neighborhoods, each with its own unique character and appeal.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={`/properties?area=${area.name}`}
                className="group relative overflow-hidden rounded-2xl luxury-card"
              >
                <div className="image-zoom relative aspect-[3/4]">
                  <Image
                    src={area.image}
                    alt={`Properties in ${area.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">{area.name}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/70">{area.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-lg bg-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                        {area.properties} Properties
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Agents Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Team</span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Expert Real Estate Agents
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-2 rounded-xl border-gold text-gold hover:bg-gold hover:text-navy">
              <Link href="/agents">
                Meet All Agents
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <div key={agent.id} className="group luxury-card overflow-hidden rounded-2xl border border-border bg-card">
                <div className="image-zoom relative aspect-[3/4]">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-lg font-bold text-primary-foreground">{agent.name}</h3>
                    <p className="text-sm text-gold">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-sm text-muted-foreground">{agent.properties} Properties</p>
                  </div>
                  <Button asChild size="sm" className="bg-gold text-navy hover:bg-gold-light rounded-lg text-xs font-semibold">
                    <Link href={`/agents#${agent.id}`}>Contact</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/property-2.jpg"
          alt="Luxury home interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Get Started Today</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70 leading-relaxed">
            Schedule a free consultation with one of our luxury property experts. We&apos;ll help you navigate the Lagos real estate market and find the perfect property.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl px-8 gap-2 text-base">
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Schedule Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 gap-2 text-base">
              <Link href="/properties">
                <MapPin className="h-5 w-5" />
                Browse Properties
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
