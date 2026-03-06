"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = "2347089059658"
  const message = encodeURIComponent("Hello! I'm interested in your luxury properties in Lagos. Can you help me find my dream home?")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      <div
        className={`absolute bottom-20 right-0 w-80 origin-bottom-right transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">LagosHomes</p>
                  <p className="text-xs text-white/80">Typically replies within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="bg-[#ECE5DD] p-4">
            <div className="rounded-lg bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-800">
                Hello! 👋 Welcome to LagosHomes. How can we help you find your perfect luxury property in Lagos today?
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-500">Just now</p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border bg-card p-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat
            </a>
          </div>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? "rotate-0" : ""
        }`}
        aria-label="Open WhatsApp chat"
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#25D366] transition-transform duration-300 ${
            isOpen ? "scale-0" : "animate-ping-slow"
          }`}
        />
        <MessageCircle
          className={`relative h-7 w-7 transition-transform duration-300 ${isOpen ? "rotate-90 scale-0" : ""}`}
        />
        <X
          className={`absolute h-7 w-7 transition-transform duration-300 ${isOpen ? "" : "-rotate-90 scale-0"}`}
        />
      </button>
    </div>
  )
}
