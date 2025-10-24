"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone } from "lucide-react"

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up space-y-6 mb-12">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground">İletişim</h2>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ürünlerimiz hakkında daha fazla bilgi almak veya iş birliği fırsatlarını değerlendirmek için bizimle
            iletişime geçin.
          </p>
        </div>

        <div className="fade-in-up grid md:grid-cols-2 gap-8 max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col items-center space-y-4 p-8 rounded-lg bg-card border border-border/50 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">WhatsApp</h3>
              <a
                href="https://wa.me/905536312334"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors block"
              >
                +90 553 631 23 34
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 p-8 rounded-lg bg-card border border-border/50 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-foreground">E-posta</h3>
              <a
                href="mailto:info@vionare.com"
                className="text-muted-foreground hover:text-accent transition-colors block"
              >
                info@vionare.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
