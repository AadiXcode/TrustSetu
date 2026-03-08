"use client"

import { Share2, Newspaper, Building2, MessageSquare } from "lucide-react"

const useCases = [
  {
    icon: Share2,
    title: "Social Media Platforms",
    description: "Protect your community by automatically detecting and filtering harmful content, deepfakes, and misinformation at scale.",
    features: ["Real-time moderation", "Viral content tracking", "User safety scoring"],
  },
  {
    icon: Newspaper,
    title: "News Verification Systems",
    description: "Ensure journalistic integrity by verifying media authenticity and detecting manipulated content before publication.",
    features: ["Source verification", "Image forensics", "Fact-check integration"],
  },
  {
    icon: Building2,
    title: "Enterprise AI Monitoring",
    description: "Secure your organization's AI systems with comprehensive monitoring and threat detection for enterprise applications.",
    features: ["API security", "Model output monitoring", "Compliance reporting"],
  },
  {
    icon: MessageSquare,
    title: "Content Moderation Platforms",
    description: "Scale your moderation efforts with AI-powered detection that works across text, images, and video content.",
    features: ["Multi-language support", "Custom policy rules", "Human-in-the-loop"],
  },
]

export function UseCasesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Built for Every Industry
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            TrustSetu powers trust and safety for organizations of all sizes
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] p-[1px] shrink-0">
                  <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-[#8b5cf6]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#8b5cf6] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-xs font-medium bg-[#8b5cf6]/10 text-[#8b5cf6] rounded-full border border-[#8b5cf6]/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
