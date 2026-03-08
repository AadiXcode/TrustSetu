"use client"

import { useRef } from "react"
import { NeuralBackground } from "@/components/neural-background"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { LiveDemoSection } from "@/components/live-demo-section"
import { DashboardSection } from "@/components/dashboard-section"
import { TechnologySection } from "@/components/technology-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const demoRef = useRef<HTMLElement>(null)
  const dashboardRef = useRef<HTMLElement>(null)

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToDashboard = () => {
    dashboardRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen bg-[#030014] overflow-x-hidden">
      {/* Animated neural network background */}
      <NeuralBackground />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection 
          onScrollToDemo={scrollToDemo} 
          onScrollToDashboard={scrollToDashboard} 
        />
        <FeaturesSection />
        <LiveDemoSection ref={demoRef} />
        <DashboardSection ref={dashboardRef} />
        <TechnologySection />
        <UseCasesSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
