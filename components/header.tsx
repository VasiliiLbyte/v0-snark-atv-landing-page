'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#advantages', label: 'Преимущества' },
  { href: '#specs', label: 'Характеристики' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-display uppercase text-2xl tracking-tight text-foreground">
              СНАРК
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:88003335059"
              className="flex items-center gap-2 font-mono text-sm tabular-nums text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              8 800 333 50 59
            </a>
            <Button asChild variant="primary" size="lg" className="px-6 rounded-md">
              <Link href="#test-drive">Тест-драйв</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-page py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:88003335059"
              className="flex items-center gap-2 font-mono text-base tabular-nums text-foreground hover:text-primary transition-colors py-3"
            >
              <Phone className="w-5 h-5 text-primary" />
              8 800 333 50 59
            </a>
            <Button asChild variant="primary" size="lg" className="mt-4 rounded-md">
              <Link href="#test-drive" onClick={() => setIsMobileMenuOpen(false)}>
                Записаться на тест-драйв
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
