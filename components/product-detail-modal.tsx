"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"

interface Product {
  title: string
  category: string
  description: string
  image: string
}

interface ProductDetailModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailModal({ product, open, onOpenChange }: ProductDetailModalProps) {
  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl font-light text-foreground">{product.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-serif text-sm font-medium text-foreground tracking-wider">VIONARE</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full">
              <span className="text-sm uppercase tracking-wider text-accent font-medium">{product.category}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Ürün Özellikleri
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6 space-y-3 border border-border/50">
              <h4 className="font-serif text-lg font-medium text-foreground">100% Organik & Doğal</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tüm VIONARE ürünleri organik ve doğal içeriklerle üretilmiştir. Paraben, silikon ve yapay katkı maddesi
                içermez.
              </p>
            </div>

            <div className="bg-accent/5 rounded-lg p-6 text-center space-y-2 border border-accent/20">
              <p className="font-serif text-lg font-medium text-foreground">Mağazalarımızdan Temin Edebilirsiniz</p>
              <p className="text-sm text-muted-foreground">Beşiktaş • Nişantaşı • Sarıyer</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
