"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PropertyMap } from "@/components/property-map"

const contactInfo = [
  { icon: MapPin, title: "Visit Our Office", detail: "14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria" },
  { icon: Phone, title: "Call Us", detail: "+234 708 905 9658 / +234 704 495 4708" },
  { icon: Mail, title: "Email Us", detail: "info@lagoshomes.com" },
  { icon: Clock, title: "Working Hours", detail: "Mon - Fri: 9AM - 6PM | Sat: 10AM - 4PM" },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-navy pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">Get in Touch</span>
          <h1 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/60 leading-relaxed">
            Have a question or want to schedule a property viewing? Reach out to our team and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold text-foreground">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form below and our team will respond promptly.</p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center justify-center py-16 text-center animate-in fade-in">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 mb-4">
                      <CheckCircle className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">First Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-foreground">Last Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                      <select className="h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none">
                        <option>Property Inquiry</option>
                        <option>Schedule a Viewing</option>
                        <option>Sell My Property</option>
                        <option>Investment Consultation</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                {contactInfo.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Office Map */}
                <PropertyMap location="14 Admiralty Way, Lekki Phase 1" area="Lekki" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Prefer to Talk?
          </h2>
          <p className="mt-4 text-primary-foreground/60 leading-relaxed">
            Schedule a free 30-minute consultation call with one of our property experts. We are here to help you every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+2347089059658">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold-light font-semibold rounded-xl px-8 gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
            <a href="mailto:info@lagoshomes.com">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl px-8 gap-2">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
