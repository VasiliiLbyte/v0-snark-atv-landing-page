'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-6 left-4 right-4 md:hidden z-40 animate-fade-in">
      <div className="bg-background border-2 border-border rounded-2xl p-4 shadow-2xl flex items-center gap-4">
        <Button asChild className="flex-1 h-12 rounded-xl shadow-lg shadow-primary/20">
          <Link href="#test-drive">
            <Phone className="w-5 h-5 mr-2" />
            Заказать звонок
          </Link>
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
