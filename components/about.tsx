"use client"

import { useEffect, useRef } from "react"

export function About() {
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
    <section ref={sectionRef} id="about" className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-up text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground text-balance">
            Güzelliği Yeniden Tanımlıyoruz
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />

          <div className="inline-block bg-accent/10 px-6 py-3 rounded-full mb-4">
            <p className="text-accent font-medium uppercase tracking-wider text-sm">%100 Organik & Doğal İçerikler</p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            VIONARE, modern ve yenilikçi bir güzellik ve kişisel bakım markasıdır. İstanbul merkezli olarak, zamansız
            zarafeti son teknoloji formülasyonlarla birleştirerek,{" "}
            <strong className="text-foreground">tamamen organik ve doğal içeriklerden</strong> oluşan ürünler sunuyoruz.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            Misyonumuz, her kadının kendini özel hissetmesini sağlayacak, olağanüstü kalitede cilt bakımı ve kişisel
            bakım ürünleri sunmaktır. <strong className="text-foreground">Doğadan gelen saf içerikler</strong> ve
            bilimsel formülasyonlarla, cildinizin ihtiyaç duyduğu bakımı en üst düzeyde ve en doğal şekilde
            karşılıyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="text-3xl font-serif text-accent">🌿</div>
              <h3 className="font-medium text-foreground">Organik</h3>
              <p className="text-sm text-muted-foreground">Tamamen doğal ve organik içerikler</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-serif text-accent">🧪</div>
              <h3 className="font-medium text-foreground">Bilimsel</h3>
              <p className="text-sm text-muted-foreground">Laboratuvar testli formülasyonlar</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-serif text-accent">♻️</div>
              <h3 className="font-medium text-foreground">Sürdürülebilir</h3>
              <p className="text-sm text-muted-foreground">Çevre dostu üretim ve ambalaj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
