'use client'

import Link from 'next/link'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      
      {/* Placeholder for video background - will be replaced with actual video */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 bg-[url('/placeholder-hero.jpg')] bg-cover bg-center opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Производство в Санкт-Петербурге
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up text-balance">
            СНАРК.{' '}
            <span className="text-primary">Свобода</span> движения
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-1 text-pretty">
            Российские вездеходы с двигателями Toyota. 
            Собственное производство, проверенное в экстремальных условиях.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
            <Button size="lg" asChild className="w-full sm:w-auto text-base px-8 py-6">
              <Link href="#test-drive">
                Записаться на тест-драйв
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base px-8 py-6"
            >
              <Link href="#specs">
                <Play className="w-4 h-4 mr-2" />
                Смотреть характеристики
              </Link>
            </Button>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20 animate-fade-in-up stagger-3">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">140</div>
              <div className="text-sm text-muted-foreground mt-1">л.с. мощности</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">1.8</div>
              <div className="text-sm text-muted-foreground mt-1">л. объём двигателя</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">4x4</div>
              <div className="text-sm text-muted-foreground mt-1">полный привод</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">30+</div>
              <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link
          href="#advantages"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Узнать больше</span>
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
