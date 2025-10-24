"use client"

import { useEffect, useRef } from "react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 animate-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="fade-in-up space-y-4">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 drop-shadow-2xl animate-shimmer">
            VIONARE
          </h1>
          <p className="text-xl md:text-2xl text-purple-900 font-medium tracking-wide">
            Yenilikçi Güzellik & Kişisel Bakım
          </p>
        </div>

        <div className="fade-in-up pt-8" style={{ animationDelay: "0.2s" }}>
          <div className="inline-block">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
