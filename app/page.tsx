import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Founder } from "@/components/founder"
import { Products } from "@/components/products"
import { Salons } from "@/components/salons"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Sparkles } from "@/components/sparkles"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Sparkles />
      <div className="relative z-10">
        <Hero />
        <About />
        <Products />
        <Founder />
        <Salons />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
