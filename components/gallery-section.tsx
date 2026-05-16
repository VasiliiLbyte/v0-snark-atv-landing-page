'use client'

import { useState } from 'react'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type GalleryItem = {
  id: number
  type: 'image' | 'video'
  src: string
  thumbnail: string
  alt: string
  category: 'exterior' | 'interior' | 'action'
}

// Placeholder gallery items - will be replaced with real content
const galleryItems: GalleryItem[] = [
  { id: 1, type: 'image', src: '/gallery/exterior-1.jpg', thumbnail: '/gallery/exterior-1-thumb.jpg', alt: 'СНАРК 1800 вид спереди', category: 'exterior' },
  { id: 2, type: 'image', src: '/gallery/exterior-2.jpg', thumbnail: '/gallery/exterior-2-thumb.jpg', alt: 'СНАРК 1800 вид сбоку', category: 'exterior' },
  { id: 3, type: 'image', src: '/gallery/exterior-3.jpg', thumbnail: '/gallery/exterior-3-thumb.jpg', alt: 'СНАРК 1800 вид сзади', category: 'exterior' },
  { id: 4, type: 'image', src: '/gallery/interior-1.jpg', thumbnail: '/gallery/interior-1-thumb.jpg', alt: 'Приборная панель СНАРК', category: 'interior' },
  { id: 5, type: 'image', src: '/gallery/interior-2.jpg', thumbnail: '/gallery/interior-2-thumb.jpg', alt: 'Сиденья СНАРК', category: 'interior' },
  { id: 6, type: 'image', src: '/gallery/action-1.jpg', thumbnail: '/gallery/action-1-thumb.jpg', alt: 'СНАРК в грязи', category: 'action' },
  { id: 7, type: 'image', src: '/gallery/action-2.jpg', thumbnail: '/gallery/action-2-thumb.jpg', alt: 'СНАРК в снегу', category: 'action' },
  { id: 8, type: 'video', src: 'https://www.youtube.com/embed/VIDEO_ID', thumbnail: '/gallery/video-thumb.jpg', alt: 'Видеообзор СНАРК 1800', category: 'action' },
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
            Фото и видео вездеходов СНАРК в различных условиях эксплуатации
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
              {/* Placeholder div - replace with actual images later */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-4">
                <span className="text-muted-foreground text-sm text-center">{item.alt}</span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="w-14 h-14 text-primary-foreground" />
                ) : (
                  <span className="font-mono text-primary-foreground text-xs font-semibold uppercase tracking-[0.18em]">Открыть</span>
                )}
              </div>

              {/* Video badge */}
              {item.type === 'video' && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-mono text-xs uppercase tracking-[0.18em]">
                  Видео
                </div>
              )}
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
              {filteredItems[currentIndex].type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={filteredItems[currentIndex].src}
                    className="w-full h-full rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center">
                  {/* Placeholder - replace with actual image */}
                  <span className="text-muted-foreground">{filteredItems[currentIndex].alt}</span>
                </div>
              )}
              <p className="text-center font-mono text-muted-foreground text-xs uppercase tracking-[0.18em] mt-6">
                {filteredItems[currentIndex].alt} ({currentIndex + 1} / {filteredItems.length})
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
