import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Briefcase, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { agents } from "@/lib/data"

export default function AgentsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Our Team</span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl">
            Meet Our Expert Agents
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/60 leading-relaxed">
            Our team of seasoned professionals brings unmatched expertise and dedication to help you navigate the Lagos luxury real estate market.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {agents.map((agent) => (
              <div
                key={agent.id}
                id={agent.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative aspect-square w-full sm:w-72 shrink-0 overflow-hidden">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-foreground">{agent.name}</h2>
                      <p className="text-gold font-medium">{agent.role}</p>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{agent.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Briefcase className="h-4 w-4 text-gold" />
                          <span>{agent.properties} Properties</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 text-gold" />
                          <span>{agent.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-3 text-sm">
                        <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                          <Phone className="h-4 w-4" />
                          {agent.phone}
                        </a>
                        <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                          <Mail className="h-4 w-4" />
                          {agent.email}
                        </a>
                      </div>
                      <Button asChild className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl w-full sm:w-auto">
                        <Link href="/contact">Contact Agent</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Join Our Team of Experts
          </h2>
          <p className="mt-4 text-primary-foreground/60 leading-relaxed">
            Are you a passionate real estate professional? We&apos;re always looking for talented agents to join the LagosHomes family.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl px-8">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
