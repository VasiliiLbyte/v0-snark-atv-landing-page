'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Галерея
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Фото и видео квадроциклов СНАРК в различных условиях эксплуатации
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer"
            >
              {/* Placeholder div - replace with actual images later */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{item.alt}</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="w-12 h-12 text-white" />
                ) : (
                  <span className="text-white text-sm font-medium">Открыть</span>
                )}
              </div>
              
              {/* Video badge */}
              {item.type === 'video' && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  Видео
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Предыдущее"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Следующее"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Content */}
            <div className="max-w-5xl max-h-[80vh] w-full mx-4">
              {filteredItems[currentIndex].type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={filteredItems[currentIndex].src}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  {/* Placeholder - replace with actual image */}
                  <span className="text-muted-foreground">{filteredItems[currentIndex].alt}</span>
                </div>
              )}
              <p className="text-center text-white/70 mt-4">
                {filteredItems[currentIndex].alt} ({currentIndex + 1} / {filteredItems.length})
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
