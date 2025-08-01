"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function ChickenTranslatorWelcome() {
  const handleStartTranslating = () => {
    // Navigate to the Cluck Speak app
    window.open("https://app--cluck-speak-b30e27d6.base44.app", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-green-50">
      {/* Main Content Container */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Chicken Mascot */}
        <div className="mb-8 relative">
          <div className="text-9xl md:text-[12rem] animate-bounce">🐔</div>
          <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
          <div className="absolute -bottom-2 -left-2 text-xl animate-pulse delay-500">💭</div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 text-amber-800 font-serif tracking-wide">
          🐔 Chicken Translator
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-center text-green-700 font-medium italic mb-8 max-w-4xl leading-relaxed">
          "Upload a cluck. Receive deep wisdom."
        </p>

        {/* Subtitle/Call to Action */}
        <p className="text-lg md:text-xl text-center text-amber-700 mb-12 max-w-2xl leading-relaxed font-medium">
          Discover the ancient secrets hidden in every barnyard conversation. Our AI-powered translator reveals the
          profound wisdom your feathered friends have been trying to share! 🧙‍♀️
        </p>

        {/* Start Button */}
        <Button
          onClick={handleStartTranslating}
          className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-500 hover:via-yellow-500 hover:to-amber-600 text-amber-900 font-bold text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-amber-300 hover:border-amber-400"
        >
          <Sparkles className="mr-3" size={28} />
          Start Translating
          <ArrowRight className="ml-3" size={28} />
        </Button>

        {/* Small subtitle under the button */}
        <p className="text-sm text-amber-600 mt-3 font-medium">Opens Cluck Speak app in new tab 🚀</p>

        {/* Fun Farm Elements */}
        <div className="mt-16 flex items-center justify-center gap-6 text-4xl md:text-5xl">
          <span className="animate-pulse">🌾</span>
          <span className="animate-bounce delay-100">🐄</span>
          <span className="animate-pulse delay-200">🌽</span>
          <span className="animate-bounce delay-300">🐷</span>
          <span className="animate-pulse delay-400">🚜</span>
          <span className="animate-bounce delay-500">🌻</span>
        </div>

        {/* Decorative Quote */}
        <div className="mt-12 max-w-md">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border-4 border-yellow-200 shadow-lg">
            <p className="text-center text-green-800 font-medium italic text-lg">
              "Bawk bawk bawk!"
              <br />
              <span className="text-sm text-amber-700 font-normal">- Translated: "Welcome, wise human!"</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="fixed top-10 left-10 text-3xl animate-pulse opacity-60">🪶</div>
      <div className="fixed top-20 right-16 text-2xl animate-bounce opacity-60 delay-700">🥚</div>
      <div className="fixed bottom-32 left-8 text-3xl animate-pulse opacity-60 delay-1000">🌾</div>
      <div className="fixed bottom-40 right-12 text-2xl animate-bounce opacity-60 delay-300">🌽</div>
    </div>
  )
}
