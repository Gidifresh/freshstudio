import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Shield, Users, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { agents } from "@/lib/data"

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We operate with complete transparency, ensuring every client can trust us with their most important investment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue excellence in every interaction, from property curation to closing deals, setting the gold standard.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Every decision we make is guided by our clients' best interests. Your dream home is our mission.",
  },
  {
    icon: TrendingUp,
    title: "Market Leadership",
    description: "We stay ahead of market trends to provide our clients with the best opportunities in Lagos real estate.",
  },
]

const stats = [
  { value: "500+", label: "Properties Listed" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "₦50B+", label: "Property Value Sold" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-gold">About Us</span>
              <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
                Redefining Luxury Real Estate in Lagos
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/60 leading-relaxed">
                LagosHomes was founded with a singular vision: to elevate the standard of real estate services in Lagos, Nigeria. For over 15 years, we have been connecting discerning buyers and sellers with exceptional properties in Lagos&apos;s most prestigious neighborhoods.
              </p>
              <p className="mt-4 text-primary-foreground/60 leading-relaxed">
                Our deep understanding of the Lagos property market, combined with a commitment to personalized service, has made us the trusted partner for high-net-worth individuals seeking premium homes, investment properties, and commercial spaces.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/property-1.jpg"
                alt="LagosHomes luxury property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-3xl font-bold text-navy md:text-4xl">{value}</p>
                <p className="mt-1 text-sm font-medium text-navy/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-gold" />
                <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Mission</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Connecting People With Exceptional Properties
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our mission is to provide unparalleled real estate services that transform the property buying and selling experience in Lagos. We leverage deep market expertise, innovative technology, and genuine client relationships to deliver results that exceed expectations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-gold" />
                <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Vision</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Setting the Global Standard
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We envision a future where Lagos stands alongside the world&apos;s great cities in luxury real estate. Our vision is to be the definitive platform that international and local buyers turn to when seeking premium properties in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">What We Stand For</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">Leadership</span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Our Team</h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              Meet the experienced professionals who drive LagosHomes&apos; success and commitment to excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <div key={agent.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={agent.image} alt={agent.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-lg font-bold text-primary-foreground">{agent.name}</h3>
                    <p className="text-sm text-gold">{agent.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground line-clamp-2">{agent.bio}</p>
                  <Button asChild size="sm" className="mt-4 bg-gold text-navy hover:bg-gold-light rounded-lg text-xs font-semibold w-full">
                    <Link href={`/agents#${agent.id}`}>View Profile</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
