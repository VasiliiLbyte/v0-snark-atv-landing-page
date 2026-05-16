'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const stats = [
  { value: '140', label: 'Л.С.' },
  { value: '4×4', label: 'Постоянный привод' },
  { value: '300', label: 'ММ клиренс' },
  { value: '400', label: 'КГ груз' },
]

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], prefersReducedMotion ? [0, 0] : [0, 120])

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-background snap-section">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
        className="absolute left-0 top-[-10%] h-[120%] w-full object-cover"
        style={{ y: videoY }}
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-topo opacity-20 pointer-events-none" />

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

    </section>
  )
}
