"use client"

import { forwardRef } from "react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts"
import { FileSearch, AlertTriangle, ScanFace, ShieldCheck, TrendingUp, Activity } from "lucide-react"

const weeklyData = [
  { name: "Mon", scans: 1850, threats: 32 },
  { name: "Tue", scans: 2100, threats: 45 },
  { name: "Wed", scans: 1920, threats: 28 },
  { name: "Thu", scans: 2400, threats: 52 },
  { name: "Fri", scans: 2200, threats: 38 },
  { name: "Sat", scans: 1600, threats: 22 },
  { name: "Sun", scans: 1360, threats: 17 },
]

const realtimeData = [
  { time: "00:00", value: 45 },
  { time: "04:00", value: 32 },
  { time: "08:00", value: 78 },
  { time: "12:00", value: 95 },
  { time: "16:00", value: 88 },
  { time: "20:00", value: 72 },
  { time: "Now", value: 85 },
]

const stats = [
  {
    icon: FileSearch,
    label: "Content Scanned Today",
    value: "12,430",
    change: "+12.5%",
    positive: true,
  },
  {
    icon: AlertTriangle,
    label: "Threats Detected",
    value: "214",
    change: "-8.2%",
    positive: true,
  },
  {
    icon: ScanFace,
    label: "Deepfakes Flagged",
    value: "32",
    change: "+2.1%",
    positive: false,
  },
  {
    icon: ShieldCheck,
    label: "Data Leaks Prevented",
    value: "18",
    change: "-15.3%",
    positive: true,
  },
]

export const DashboardSection = forwardRef<HTMLElement>(function DashboardSection(_, ref) {
  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              AI Security Dashboard
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            Real-time monitoring and analytics for your content security
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-8 h-8 text-[#8b5cf6]" />
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-[#888]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Scans Chart */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Weekly Content Scans</h3>
                <p className="text-sm text-[#888]">Scans vs Threats detected</p>
              </div>
              <TrendingUp className="w-5 h-5 text-[#06b6d4]" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <Bar dataKey="scans" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="threats" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
                <span className="text-sm text-[#888]">Scans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                <span className="text-sm text-[#888]">Threats</span>
              </div>
            </div>
          </div>

          {/* Real-time Activity */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Real-time Activity</h3>
                <p className="text-sm text-[#888]">Active threat monitoring</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <Activity className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={realtimeData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Threat Distribution */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Threat Distribution</h3>
            <div className="space-y-4">
              {[
                { label: "Harmful Content", value: 45, color: "bg-red-500" },
                { label: "Deepfakes", value: 28, color: "bg-[#8b5cf6]" },
                { label: "Data Leaks", value: 18, color: "bg-[#06b6d4]" },
                { label: "Misinformation", value: 9, color: "bg-yellow-500" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#a5a5a5]">{item.label}</span>
                    <span className="text-sm font-medium text-white">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-[#1e1b4b] rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { type: "Deepfake", status: "blocked", time: "2 min ago", severity: "high" },
                { type: "Data Leak", status: "prevented", time: "5 min ago", severity: "medium" },
                { type: "Harmful Content", status: "flagged", time: "12 min ago", severity: "high" },
                { type: "Suspicious Pattern", status: "reviewing", time: "18 min ago", severity: "low" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-[#0a0520] rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    item.severity === "high" ? "bg-red-500" : item.severity === "medium" ? "bg-yellow-500" : "bg-green-500"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">{item.type}</span>
                      <span className="text-xs text-[#666]">{item.time}</span>
                    </div>
                    <span className={`text-xs ${
                      item.status === "blocked" ? "text-red-400" : 
                      item.status === "prevented" ? "text-green-400" : 
                      item.status === "flagged" ? "text-yellow-400" : "text-blue-400"
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
