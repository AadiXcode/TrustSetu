"use client"

import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "API Docs", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Support", "Status", "Security"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Compliance"],
}

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(139,92,246,0.2)] bg-[#030014]/80">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                TrustSetu
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              AI-powered trust and safety platform protecting the internet from harmful content, deepfakes, and data leaks.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-[#1e1b4b] text-[#888] hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#1e1b4b] text-[#888] hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#1e1b4b] text-[#888] hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-[#1e1b4b] text-[#888] hover:text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#888] hover:text-[#8b5cf6] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(139,92,246,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">
            © 2026 TrustSetu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#666] hover:text-[#8b5cf6] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-[#666] hover:text-[#8b5cf6] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-[#666] hover:text-[#8b5cf6] transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
