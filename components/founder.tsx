"use client"

import { useEffect, useRef } from "react"

export function Founder() {
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
    <section ref={sectionRef} id="founder" className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bilgen-ks0mONhUpDqOTFGaqPEShuMpVmMoAn.png"
                alt="BİLGEN ALTIN - VIONARE Kurucusu"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>

          <div className="fade-in-up space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-2">BİLGEN ALTIN</h2>
              <div className="w-16 h-px bg-accent mb-6" />
              <p className="text-lg text-accent font-medium uppercase tracking-wider">Kurucu & Vizyon Lideri</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                2018 yılından bu yana güzellik ve kozmetik sektöründe öncü bir isim olan BİLGEN ALTIN, VIONARE markasını
                kadınların doğal güzelliklerini ortaya çıkarmak ve kendilerini özel hissetmelerini sağlamak vizyonuyla
                kurdu.
              </p>
              <p>
                Yılların deneyimi ve sektöre olan tutkusuyla, modern bilimi doğal içeriklerle harmanlayarak, her kadının
                cilt tipine uygun, etkili ve güvenli ürünler geliştirmeyi hedefliyor.
              </p>
              <p>
                "Güzellik, kendini iyi hissetmekle başlar. VIONARE ile her kadının kendi güzelliğini keşfetmesine ve ona
                güvenle sahip çıkmasına yardımcı olmak istiyoruz."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
