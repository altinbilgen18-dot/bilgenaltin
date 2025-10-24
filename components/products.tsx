"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ProductDetailModal } from "./product-detail-modal"

const products = [
  {
    title: "Aydınlatıcı C Vitamini Serumu",
    category: "Cilt Bakımı",
    description:
      "Organik portakal ve gül kalçası özlü, yüksek konsantrasyonlu C vitamini serumu. Cilt tonunu eşitler, lekeleri azaltır ve cildinize doğal bir ışıltı kazandırır.",
    image: "/vionare-vitamin-c-serum.jpg",
  },
  {
    title: "Kadife Nemlendirici Krem",
    category: "Cilt Bakımı",
    description:
      "Organik shea yağı ve E vitamini içeren zengin doku. Cildi derinlemesine nemlendirir, elastikiyeti artırır ve kırışıklıkları azaltır.",
    image: "/vionare-moisturizer-cream.jpg",
  },
  {
    title: "Hassas Cilt Temizleyici",
    category: "Temizlik",
    description:
      "Organik aloe vera ve papatya özlü pH dengeli formül. Cildi tahriş etmeden derinlemesine temizler, tüm cilt tiplerine uygundur.",
    image: "/vionare-gentle-cleanser.jpg",
  },
  {
    title: "Gece Yenileme Kremi",
    category: "Cilt Bakımı",
    description:
      "Organik argan yağı ve peptit kompleksi ile gece boyunca cildinizi yeniler. Yaşlanma karşıtı etki sağlar, sabah cildiniz pürüzsüz görünür.",
    image: "/vionare-night-cream.jpg",
  },
  {
    title: "Göz Çevresi Bakım Serumu",
    category: "Cilt Bakımı",
    description:
      "Organik yeşil çay ve niasinamid içerikli. Göz çevresindeki ince çizgileri azaltır, göz altı morluklarını giderir, cildi sıkılaştırır.",
    image: "/vionare-eye-serum.jpg",
  },
  {
    title: "Yüz Maskesi - Detoks",
    category: "Maske",
    description:
      "Organik aktif kömür ve kil içeren detoks maskesi. Gözenekleri derinlemesine temizler, fazla yağı alır ve cildi arındırır.",
    image: "/vionare-detox-mask.jpg",
  },
  {
    title: "Nemlendirici Yüz Maskesi",
    category: "Maske",
    description:
      "Organik gül suyu ve hyaluronik asit içeren yoğun nemlendirici maske. Kuru ciltlere canlılık kazandırır, cildi yumuşatır ve parlaklık verir.",
    image: "/vionare-hydrating-mask.jpg",
  },
  {
    title: "Güneş Koruyucu SPF 50+",
    category: "Koruma",
    description:
      "Organik çinko oksit bazlı mineral güneş koruyucu. Geniş spektrumlu koruma, beyaz iz bırakmaz, su geçirmez formül.",
    image: "/vionare-sunscreen-spf50.jpg",
  },
  {
    title: "Tonik - Gül Suyu",
    category: "Temizlik",
    description:
      "Organik Isparta gülü suyu ve probiyotik içeren yatıştırıcı tonik. Cildin pH dengesini korur, gözenekleri sıkılaştırır.",
    image: "/vionare-rose-toner.jpg",
  },
  {
    title: "Peeling Jel",
    category: "Temizlik",
    description:
      "Organik meyve asitleri (AHA) içeren nazik peeling jel. Ölü deri hücrelerini temizler, gözenekleri açar ve cilt dokusunu düzeltir.",
    image: "/vionare-peeling-gel.jpg",
  },
  {
    title: "Dudak Bakım Balsamı",
    category: "Dudak Bakımı",
    description:
      "Organik shea yağı, kakao yağı ve E vitamini içeren besleyici dudak balsamı. Çatlamış dudakları onarır, yumuşaklık ve nem sağlar.",
    image: "/vionare-lip-balm.jpg",
  },
  {
    title: "El Kremi - Lavanta",
    category: "El Bakımı",
    description:
      "Organik lavanta yağı ve gliserin içeren yoğun nemlendirici el kremi. Elleri yumuşatır, yağlı his bırakmadan hızlı emilir.",
    image: "/vionare-hand-cream-lavender.jpg",
  },
  {
    title: "Vücut Losyonu",
    category: "Vücut Bakımı",
    description:
      "Organik argan yağı ve shea butter ile zenginleştirilmiş hafif losyon. Cildi 24 saat boyunca nemlendirir ve yumuşatır.",
    image: "/vionare-body-lotion.jpg",
  },
  {
    title: "Vücut Peelingi",
    category: "Vücut Bakımı",
    description:
      "Organik şeker kristalleri ve hindistan cevizi yağı içeren vücut peelingi. Ölü derileri temizler, cildi pürüzsüzleştirir.",
    image: "/vionare-body-scrub.jpg",
  },
  {
    title: "Saç Maskesi - Onarıcı",
    category: "Saç Bakımı",
    description:
      "Organik argan yağı ve bitkisel keratin içeren yoğun onarıcı saç maskesi. Yıpranmış saçları besler, kırılmaları önler.",
    image: "/vionare-hair-mask.jpg",
  },
  {
    title: "Micellar Su",
    category: "Temizlik",
    description:
      "Organik gül suyu bazlı micellar su. Tek hamlede makyaj ve kirleri temizler, durulamaya gerek yok, hassas ciltler için ideal.",
    image: "/vionare-micellar-water.jpg",
  },
  {
    title: "Yüz Yağı - Besleyici",
    category: "Cilt Bakımı",
    description:
      "Organik jojoba, gül kalçası ve nar çekirdeği yağı karışımı. Cildi derinlemesine besler, elastikiyeti artırır ve doğal parlaklık verir.",
    image: "/vionare-face-oil.jpg",
  },
  {
    title: "Göz Kremi - Sıkılaştırıcı",
    category: "Cilt Bakımı",
    description:
      "Organik avokado yağı ve peptit içeren göz kremi. Göz çevresini sıkılaştırır, şişlikleri azaltır ve canlı bir görünüm sağlar.",
    image: "/vionare-eye-cream.jpg",
  },
  {
    title: "Yüz Spreyi - Canlandırıcı",
    category: "Temizlik",
    description:
      "Organik gül ve neroli suyu karışımı. Cildi anında canlandırır, nemlendirir ve makyaj fiksatörü olarak kullanılabilir.",
    image: "/vionare-face-mist.jpg",
  },
  {
    title: "Kil Maskesi - Arındırıcı",
    category: "Maske",
    description:
      "Organik yeşil kil ve çay ağacı yağı içeren arındırıcı maske. Yağlı ve karma ciltler için ideal, gözenekleri temizler ve matlaştırır.",
    image: "/vionare-clay-mask.jpg",
  },
]

export function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleProductClick = (product: (typeof products)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section ref={sectionRef} id="products" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in-up text-center space-y-6 mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground">Ürün Koleksiyonumuz</h2>
          <div className="w-16 h-px bg-accent mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Günlük güzellik ritüelinizi üst seviyeye taşımak için özenle hazırlanmış organik formülasyonlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.title} className="fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <Card
                className="overflow-hidden border-border/50 bg-card hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-serif text-xs font-medium text-foreground tracking-wider">VIONARE</span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-xs uppercase tracking-wider text-accent font-medium">{product.category}</div>
                  <h3 className="font-serif text-xl font-medium text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <ProductDetailModal product={selectedProduct} open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}
