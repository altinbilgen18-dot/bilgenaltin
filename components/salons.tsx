"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

const salons = [
  {
    name: "VIONARE Beşiktaş",
    address: "Nisbetiye Caddesi NO: 24, Beşiktaş, İstanbul",
    hours: "Pazartesi - Cumartesi: 09:00 - 20:00",
    phone: "+90 553 631 23 34",
    services: ["Cilt Bakımı", "Makyaj", "Kaş & Kirpik", "Masaj"],
  },
  {
    name: "VIONARE Nişantaşı",
    address: "Teşvikiye Caddesi No: 78, Nişantaşı, İstanbul",
    hours: "Pazartesi - Cumartesi: 09:00 - 20:00",
    phone: "+90 553 631 23 34",
    services: ["Cilt Bakımı", "Anti-Aging", "Lazer Epilasyon", "Medikal Estetik"],
  },
  {
    name: "VIONARE Sarıyer",
    address: "İstinye Park AVM, Sarıyer, İstanbul",
    hours: "Her Gün: 10:00 - 22:00",
    phone: "+90 553 631 23 34",
    services: ["Cilt Bakımı", "Manikür & Pedikür", "Saç Bakımı", "Spa"],
  },
]

export function Salons() {
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
    <section ref={sectionRef} id="salons" className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up text-center space-y-6 mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground">Güzellik Salonlarımız</h2>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            İstanbul'un prestijli lokasyonlarında, uzman ekibimizle size özel güzellik deneyimi sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salons.map((salon, index) => (
            <div key={salon.name} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="p-8 border-border/50 bg-card hover:shadow-xl transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-4">{salon.name}</h3>
                    <div className="w-12 h-px bg-accent" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{salon.address}</p>
                    </div>

                    <div className="flex gap-3">
                      <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground">{salon.hours}</p>
                    </div>

                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <a
                        href={`https://wa.me/905536312334`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        {salon.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Hizmetlerimiz</p>
                    <div className="flex flex-wrap gap-2">
                      {salon.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-secondary/50 text-xs text-foreground rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
