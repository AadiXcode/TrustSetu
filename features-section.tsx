"use client"

import { ShieldAlert, ScanFace, Database } from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "Harmful Content Detection",
    description: "AI models scan text, images, and videos to detect toxic or dangerous content in real-time.",
    gradient: "from-red-500 to-orange-500",
    iconColor: "text-red-400",
  },
  {
    icon: ScanFace,
    title: "Deepfake Detection",
    description: "Advanced neural detection identifies whether media is real or AI generated with 99.7% accuracy.",
    gradient: "from-[#8b5cf6] to-blue-500",
    iconColor: "text-[#8b5cf6]",
  },
  {
    icon: Database,
    title: "Sensitive Data Protection",
    description: "Detects emails, phone numbers, and confidential data before it leaks across the internet.",
    gradient: "from-[#06b6d4] to-green-500",
    iconColor: "text-[#06b6d4]",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              AI-Powered Protection
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            Our multi-layered AI system provides comprehensive protection against digital threats
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Icon container */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center">
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#8b5cf6] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#888] leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
