'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type GalleryItem = {
  id: number
  src: string
  alt: string
  category: 'exterior' | 'interior' | 'action'
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/gallery/exterior-1.jpg', alt: 'СНАРК 1800 вид спереди', category: 'exterior' },
  { id: 2, src: '/gallery/exterior-2.jpg', alt: 'СНАРК 1800 вид сбоку', category: 'exterior' },
  { id: 3, src: '/gallery/exterior-3.jpg', alt: 'СНАРК 1800 вид сзади', category: 'exterior' },
  { id: 4, src: '/gallery/interior-1.jpg', alt: 'Интерьер СНАРК 1800', category: 'interior' },
  { id: 5, src: '/gallery/interior-2.jpg', alt: 'Салон СНАРК 1800', category: 'interior' },
  { id: 6, src: '/gallery/action-1.jpg', alt: 'СНАРК в движении', category: 'action' },
  { id: 7, src: '/gallery/action-2.jpg', alt: 'СНАРК на бездорожье', category: 'action' },
  { id: 8, src: '/gallery/action-3.jpg', alt: 'СНАРК в полевых условиях', category: 'action' },
]

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'exterior', label: 'Экстерьер' },
  { id: 'interior', label: 'Интерьер' },
  { id: 'action', label: 'В действии' },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="section snap-section bg-background relative">
      <div className="container-page relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow inline-block mb-4">Медиа</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            Галерея
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Фото вездеходов СНАРК в различных условиях эксплуатации
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-md px-6 font-mono uppercase text-xs tracking-[0.18em]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-md bg-card border border-border cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="font-mono text-primary-foreground text-xs font-semibold uppercase tracking-[0.18em]">Открыть</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Предыдущее"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Следующее"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            {/* Content */}
            <div className="max-w-5xl max-h-[80vh] w-full mx-4">
              <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center">
                <Image
                  src={filteredItems[currentIndex].src}
                  alt={filteredItems[currentIndex].alt}
                  fill
                  sizes="min(100vw, 1024px)"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
