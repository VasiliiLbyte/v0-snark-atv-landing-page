'use client'

import Link from 'next/link'
import { ArrowDown, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background snap-section">
      {/* Topographic grid overlay */}
      <div className="absolute inset-0 bg-topo opacity-30 pointer-events-none" />

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="container-page relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/5 border border-primary/30 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Производство в Санкт-Петербурге
              </span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-center font-display uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-foreground mb-8 animate-fade-in-up text-balance leading-[0.95]">
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
            <Button
              variant="primary"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base px-10 py-7 rounded-md"
            >
              <Link href="#test-drive">
                Записаться на тест-драйв
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base px-10 py-7 rounded-md"
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
              <div className="font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">140</div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">л.с. мощности</div>
            </div>
            <div className="text-center group">
              <div className="font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">1.8</div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">литра объём</div>
            </div>
            <div className="text-center group">
              <div className="font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-primary">4x4</div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">полный привод</div>
            </div>
            <div className="text-center group">
              <div className="font-mono tabular-nums text-4xl md:text-5xl lg:text-6xl font-bold text-foreground group-hover:text-primary transition-colors">30+</div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">лет опыта</div>
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
          <span className="font-mono text-xs uppercase tracking-[0.18em]">Узнать больше</span>
          <ArrowDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
