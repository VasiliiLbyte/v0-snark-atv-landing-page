'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, X } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const stats = [
  { value: '140', label: 'Л.С.' },
  { value: '4×4', label: 'Постоянный привод' },
  { value: '350', label: 'ММ клиренс' },
  { value: '400', label: 'КГ груз' },
]

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], prefersReducedMotion ? [0, 0] : [0, 120])

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-background snap-section">
      <motion.video
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute left-0 top-[-10%] h-[120%] w-full object-cover"
        style={{ y: videoY }}
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-topo opacity-20 pointer-events-none" />

      {/* Top instrumentation */}
      <div className="container-page absolute left-1/2 top-6 z-20 -translate-x-1/2 md:top-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="inline-flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm">
              <span className="font-mono text-sm font-bold">S</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 md:text-xs">
              PRODUCTION — SAINT PETERSBURG, RUSSIA — EST. 1991
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 md:text-xs">
              Принимаем заказы на 2026
            </span>
          </div>
        </div>
      </div>

      {/* Bottom headline composition */}
      <div className="container-page absolute bottom-16 left-1/2 z-20 -translate-x-1/2 text-center md:bottom-20">
        <div className="mx-auto max-w-6xl">
          <h1
            className="font-display font-bold uppercase leading-[0.95] tracking-tight text-white text-balance"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 7.5rem)' }}
          >
            Там, где заканчиваются дороги
          </h1>

          <p className="mx-auto mt-6 max-w-3xl font-mono text-xs uppercase tracking-[0.18em] text-white/75 md:text-sm">
            СНАРК 1800 — вездеход на колёсах низкого давления
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              asChild
              className="h-14 w-full rounded-md border-white/70 px-8 font-mono text-xs uppercase tracking-[0.18em] text-white hover:border-primary sm:w-auto"
            >
              <Link href="#test-drive">
                Заказать тест-драйв
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="h-14 w-full rounded-md px-8 font-mono text-xs uppercase tracking-[0.18em] text-white/85 hover:bg-white/10 hover:text-white sm:w-auto"
              onClick={() => setIsVideoOpen(true)}
            >
              Смотреть видео
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile stats row (hidden on desktop where the vertical block on the right is shown) */}
          <div className="mt-8 flex items-center justify-center text-white/85 font-mono text-[10px] uppercase tracking-[0.18em] xl:hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={cn(
                  'flex flex-col items-center px-3 sm:px-4',
                  i > 0 && 'border-l border-white/20',
                )}
              >
                <span className="text-base font-bold tabular-nums leading-none">{stat.value}</span>
                <span className="mt-1 text-[9px] text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 z-20 hidden items-end gap-4 text-white/70 md:bottom-12 md:left-10 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="relative h-[60px] w-px overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 h-5 w-px animate-[scroll-line_1.8s_ease-in-out_infinite] bg-white" />
        </div>
      </div>

      {/* Technical stats (desktop vertical column) */}
      <div className="absolute bottom-8 right-6 z-20 hidden flex-col gap-6 border-l border-white/20 pl-6 text-white md:bottom-12 md:right-10 xl:flex">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-mono text-3xl font-bold tabular-nums leading-none">
              {stat.value}
            </div>
            <div className="mt-2 max-w-[9rem] font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Закрыть видео"
            onClick={() => setIsVideoOpen(false)}
          />

          <div className="relative z-10 w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute -right-2 -top-12 text-white/70 transition-colors hover:text-white md:-right-12 md:top-0"
              aria-label="Закрыть"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="aspect-video overflow-hidden rounded-md border border-white/10 bg-background">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Видеообзор СНАРК 1800"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
