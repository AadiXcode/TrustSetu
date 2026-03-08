"use client"

import { Shield, ArrowRight, Zap } from "lucide-react"

interface HeroSectionProps {
  onScrollToDemo: () => void
  onScrollToDashboard: () => void
}

export function HeroSection({ onScrollToDemo, onScrollToDashboard }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Gradient overlays */}
      <div className="absolute inset-0 neural-bg pointer-events-none" />
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-pulse-glow">
          <Shield className="w-5 h-5 text-[#06b6d4]" />
          <span className="text-sm font-medium bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            AI-Powered Security Platform
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            TrustSetu
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-[#a5a5a5]">
          AI Safety Bridge for the Internet
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-[#888] max-w-3xl mx-auto mb-12 leading-relaxed">
          TrustSetu is an advanced AI trust and safety platform that scans internet content 
          to detect harmful media, deepfakes, and sensitive data leaks before they spread.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onScrollToDemo}
            className="group glow-button px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center gap-3"
          >
            <Zap className="w-5 h-5" />
            Try Live Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button
            onClick={onScrollToDashboard}
            className="glow-button-secondary px-8 py-4 rounded-xl text-white font-semibold text-lg flex items-center gap-3"
          >
            View Security Dashboard
          </button>
        </div>

        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "99.7%", label: "Detection Accuracy" },
            { value: "10M+", label: "Content Scanned" },
            { value: "<50ms", label: "Response Time" },
            { value: "500+", label: "Enterprise Clients" },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-4 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-[#888]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#8b5cf6]/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#8b5cf6] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
