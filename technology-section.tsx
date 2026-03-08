"use client"

import { Brain, Server, Eye, Lock, Zap } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "AI Neural Engine",
    description: "State-of-the-art transformer models trained on billions of data points for accurate content analysis.",
  },
  {
    icon: Server,
    title: "FastAPI Backend",
    description: "High-performance Python backend with async processing for real-time content scanning.",
  },
  {
    icon: Eye,
    title: "Deepfake Detection Model",
    description: "Advanced CNN-based detection system identifying AI-generated and manipulated media.",
  },
  {
    icon: Lock,
    title: "Secure Data Protection",
    description: "End-to-end encryption with zero-knowledge architecture for maximum privacy.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Sub-50ms response times with distributed edge processing across global infrastructure.",
  },
]

export function TechnologySection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Powered by Advanced Technology
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            Built with cutting-edge AI and security infrastructure
          </p>
        </div>

        {/* Technology grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                index === technologies.length - 1 && technologies.length % 3 !== 0 
                  ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' 
                  : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] p-[1px] mb-5">
                <div className="w-full h-full rounded-xl bg-[#0a0520] flex items-center justify-center">
                  <tech.icon className="w-7 h-7 text-[#8b5cf6]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#8b5cf6] transition-colors">
                {tech.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture diagram hint */}
        <div className="mt-16 glass-card rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {["Input Layer", "AI Processing", "Neural Analysis", "Threat Detection", "Secure Output"].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="px-4 py-2 bg-[#0a0520] rounded-lg border border-[rgba(139,92,246,0.3)]">
                  <span className="text-sm font-medium text-[#a5a5a5]">{step}</span>
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
