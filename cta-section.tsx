"use client"

import { Shield, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-card rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 via-transparent to-[#06b6d4]/20" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8b5cf6]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#06b6d4]/30 rounded-full blur-3xl" />
          
          <div className="relative text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] mb-8 animate-pulse-glow">
              <Shield className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-white via-[#a5a5a5] to-white bg-clip-text text-transparent">
                Secure the Internet with
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                TrustSetu
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#888] text-lg max-w-2xl mx-auto mb-10">
              Join leading organizations protecting their platforms with AI-powered trust and safety solutions.
            </p>

            {/* CTA Button */}
            <button className="group glow-button px-10 py-5 rounded-xl text-white font-semibold text-lg inline-flex items-center gap-3">
              <Shield className="w-5 h-5" />
              Start AI Protection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Trust badges */}
            <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
              {["SOC 2 Certified", "GDPR Compliant", "ISO 27001", "Enterprise Ready"].map((badge, index) => (
                <span key={index} className="text-sm text-[#666]">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
