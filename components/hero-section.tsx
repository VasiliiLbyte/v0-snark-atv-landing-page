'use client'

import Link from 'next/link'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary/30">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Производство в Санкт-Петербурге
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-8 animate-fade-in-up text-balance leading-[1.1]">
            Вездеходы{' '}
            <span className="text-primary">СНАРК</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 animate-fade-in-up stagger-1 text-pretty leading-relaxed">
            Российская техника с японским сердцем. Двигатели Toyota, 
            полный привод, 30 лет надёжности.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2">
            <Button size="lg" asChild className="w-full sm:w-auto text-base px-10 py-7 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link href="#test-drive">
                Записаться на тест-драйв
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base px-10 py-7 rounded-xl border-2 hover:bg-secondary"
            >
              <Link href="#specs">
                <Play className="w-4 h-4 mr-2" />
                Характеристики
              </Link>
            </Button>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 md:mt-32 animate-fade-in-up stagger-3">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">140</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">л.с. мощности</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">1.8</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">литра объём</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">4x4</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">полный привод</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">30+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link
          href="#advantages"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">Узнать больше</span>
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
