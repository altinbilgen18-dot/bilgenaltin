"use client"

import { useEffect, useRef } from "react"

export function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const colors = [
      { r: 255, g: 215, b: 0 }, // Gold
      { r: 255, g: 182, b: 193 }, // Pink
      { r: 186, g: 85, b: 211 }, // Purple
      { r: 255, g: 105, b: 180 }, // Hot Pink
      { r: 255, g: 192, b: 203 }, // Light Pink
      { r: 255, g: 255, b: 255 }, // White
    ]

    // Sparkle particles
    const sparkles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      fadeSpeed: number
      color: { r: number; g: number; b: number }
      rotation: number
      rotationSpeed: number
    }> = []

    // Create sparkles
    const createSparkle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        fadeSpeed: Math.random() * 0.015 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      }
    }

    // Initialize sparkles - more sparkles for better effect
    for (let i = 0; i < 100; i++) {
      sparkles.push(createSparkle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparkles.forEach((sparkle) => {
        // Update position
        sparkle.x += sparkle.speedX
        sparkle.y += sparkle.speedY

        // Update opacity
        sparkle.opacity += sparkle.fadeSpeed
        if (sparkle.opacity >= 1 || sparkle.opacity <= 0.2) {
          sparkle.fadeSpeed *= -1
        }

        // Update rotation
        sparkle.rotation += sparkle.rotationSpeed

        // Wrap around screen
        if (sparkle.x < 0) sparkle.x = canvas.width
        if (sparkle.x > canvas.width) sparkle.x = 0
        if (sparkle.y < 0) sparkle.y = canvas.height
        if (sparkle.y > canvas.height) sparkle.y = 0

        // Draw sparkle
        ctx.save()
        ctx.translate(sparkle.x, sparkle.y)
        ctx.rotate(sparkle.rotation)

        // Draw star shape
        ctx.beginPath()
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5
          const x = Math.cos(angle) * sparkle.size
          const y = Math.sin(angle) * sparkle.size
          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkle.size * 2)
        gradient.addColorStop(0, `rgba(${sparkle.color.r}, ${sparkle.color.g}, ${sparkle.color.b}, ${sparkle.opacity})`)
        gradient.addColorStop(
          0.5,
          `rgba(${sparkle.color.r}, ${sparkle.color.g}, ${sparkle.color.b}, ${sparkle.opacity * 0.5})`,
        )
        gradient.addColorStop(1, `rgba(${sparkle.color.r}, ${sparkle.color.g}, ${sparkle.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = `rgba(${sparkle.color.r}, ${sparkle.color.g}, ${sparkle.color.b}, ${sparkle.opacity})`

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "screen" }} />
}
