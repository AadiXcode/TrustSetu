"use client"

import { useState, useRef, forwardRef } from "react"
import { Upload, X, Zap, Shield, ScanFace, Database, AlertTriangle, CheckCircle } from "lucide-react"

interface AnalysisResult {
  safetyScore: number
  deepfakeProbability: number
  sensitiveData: string[]
  threats: string[]
}

const scanMessages = [
  "Initializing AI safety engine...",
  "Scanning content...",
  "Running neural detection models...",
  "Detecting deepfakes...",
  "Checking sensitive data exposure...",
  "Generating security report...",
]

export const LiveDemoSection = forwardRef<HTMLElement>(function LiveDemoSection(_, ref) {
  const [textInput, setTextInput] = useState("")
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const analyzeContent = async () => {
    setIsAnalyzing(true)
    setResult(null)
    setCurrentMessage(0)

    // Simulate scanning messages
    for (let i = 0; i < scanMessages.length; i++) {
      setCurrentMessage(i)
      await new Promise((resolve) => setTimeout(resolve, 400))
    }

    // Generate mock results based on input
    const mockResult: AnalysisResult = {
      safetyScore: Math.floor(Math.random() * 30) + 70,
      deepfakeProbability: Math.floor(Math.random() * 25),
      sensitiveData: textInput.includes("@") 
        ? ["Email address detected"] 
        : textInput.match(/\d{10,}/) 
          ? ["Phone number detected"] 
          : [],
      threats: Math.random() > 0.7 
        ? ["Potential misinformation pattern detected"] 
        : [],
    }

    setResult(mockResult)
    setIsAnalyzing(false)
  }

  const canAnalyze = textInput.trim().length > 0 || imagePreview !== null

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Live AI Demo
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto">
            Experience our AI safety engine in action. Paste text or upload an image to analyze.
          </p>
        </div>

        {/* Demo container */}
        <div className="glass-card rounded-2xl p-6 md:p-8">
          {/* Input area */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Text input */}
            <div>
              <label className="block text-sm font-medium text-[#a5a5a5] mb-2">
                Text Content
              </label>
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Paste text content to analyze for harmful content, misinformation, or sensitive data..."
                className="w-full h-40 bg-[#0a0520] border border-[rgba(139,92,246,0.3)] rounded-xl p-4 text-white placeholder-[#666] resize-none focus:outline-none focus:border-[#8b5cf6] transition-colors"
              />
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-sm font-medium text-[#a5a5a5] mb-2">
                Image Upload
              </label>
              {!imagePreview ? (
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-40 border-2 border-dashed border-[rgba(139,92,246,0.3)] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#8b5cf6] transition-colors bg-[#0a0520]"
                >
                  <Upload className="w-10 h-10 text-[#666] mb-2" />
                  <p className="text-[#666] text-sm">Drag & drop or click to upload</p>
                  <p className="text-[#555] text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                </div>
              ) : (
                <div className="relative w-full h-40 rounded-xl overflow-hidden">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1 bg-red-500/80 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Analyze button */}
          <button
            onClick={analyzeContent}
            disabled={!canAnalyze || isAnalyzing}
            className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${
              canAnalyze && !isAnalyzing
                ? "glow-button text-white"
                : "bg-[#1e1b4b] text-[#666] cursor-not-allowed"
            }`}
          >
            {isAnalyzing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Analyze Content
              </>
            )}
          </button>

          {/* Scanning animation */}
          {isAnalyzing && (
            <div className="mt-8 p-6 bg-[#0a0520] rounded-xl border border-[rgba(139,92,246,0.3)]">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-[#8b5cf6]/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#8b5cf6] animate-spin" />
                  <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#06b6d4] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                </div>
                <div className="flex-1">
                  <p className="text-[#8b5cf6] font-medium mb-2">AI Safety Engine Active</p>
                  <p className="text-[#06b6d4] text-sm animate-pulse">
                    {scanMessages[currentMessage]}
                  </p>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-4 h-2 bg-[#1e1b4b] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-400"
                  style={{ width: `${((currentMessage + 1) / scanMessages.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Results */}
          {result && !isAnalyzing && (
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {/* Safety Score */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className={`w-6 h-6 ${result.safetyScore >= 80 ? 'text-green-400' : result.safetyScore >= 50 ? 'text-yellow-400' : 'text-red-400'}`} />
                  <span className="font-medium">Safety Score</span>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  {result.safetyScore}%
                </div>
                <div className="h-3 bg-[#1e1b4b] rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      result.safetyScore >= 80 ? 'bg-green-500' : result.safetyScore >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${result.safetyScore}%` }}
                  />
                </div>
                <p className="text-sm text-[#888] mt-2">
                  {result.safetyScore >= 80 ? 'Content appears safe' : result.safetyScore >= 50 ? 'Some concerns detected' : 'High risk content'}
                </p>
              </div>

              {/* Deepfake Probability */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ScanFace className={`w-6 h-6 ${result.deepfakeProbability <= 20 ? 'text-green-400' : result.deepfakeProbability <= 50 ? 'text-yellow-400' : 'text-red-400'}`} />
                  <span className="font-medium">Deepfake Probability</span>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  {result.deepfakeProbability}%
                </div>
                <div className="h-3 bg-[#1e1b4b] rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      result.deepfakeProbability <= 20 ? 'bg-green-500' : result.deepfakeProbability <= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${result.deepfakeProbability}%` }}
                  />
                </div>
                <p className="text-sm text-[#888] mt-2">
                  {result.deepfakeProbability <= 20 ? 'Likely authentic' : result.deepfakeProbability <= 50 ? 'Requires review' : 'AI-generated content'}
                </p>
              </div>

              {/* Sensitive Data */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className={`w-6 h-6 ${result.sensitiveData.length === 0 ? 'text-green-400' : 'text-yellow-400'}`} />
                  <span className="font-medium">Sensitive Data</span>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  {result.sensitiveData.length}
                </div>
                <div className="space-y-2">
                  {result.sensitiveData.length === 0 ? (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      No sensitive data found
                    </div>
                  ) : (
                    result.sensitiveData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-yellow-400 text-sm">
                        <AlertTriangle className="w-4 h-4" />
                        {item}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})
