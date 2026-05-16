'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const cities = [
  'Санкт-Петербург',
  'Москва',
  'Воронеж',
  'Нижний Новгород',
  'Екатеринбург',
  'Другой город',
]

export function TestDriveSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    comment: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Honeypot field for spam protection
  const [honeypot, setHoneypot] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона'
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный номер телефона'
    }

    if (!formData.city) {
      newErrors.city = 'Выберите город'
    }

    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку данных'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Spam check
    if (honeypot) return

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form
    setFormData({
      name: '',
      phone: '',
      city: '',
      comment: '',
      consent: false,
    })
  }

  return (
    <section id="test-drive" className="section snap-section bg-background relative">
      <div className="container-page relative">
        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="section-eyebrow inline-block mb-4">Заявка</span>
            <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
              Записаться на тест-драйв
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Испытайте СНАРК в реальных условиях. Менеджер свяжется с вами в течение 30 минут.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot - hidden from users */}
            <div className="hidden" aria-hidden="true">
              <Input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">Имя *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Как вас зовут?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-14 text-base rounded-md px-5 bg-card border-border ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`h-14 text-base rounded-md px-5 bg-card border-border font-mono tabular-nums ${errors.phone ? 'border-destructive' : ''}`}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label className="text-base font-medium">Город *</Label>
              <Select
                value={formData.city}
                onValueChange={(value) => setFormData({ ...formData, city: value })}
              >
                <SelectTrigger className={`h-14 text-base rounded-md px-5 bg-card border-border ${errors.city ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Выберите город" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city}</p>
              )}
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-base font-medium">Комментарий</Label>
              <Textarea
                id="comment"
                placeholder="Вопросы или пожелания (необязательно)"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={4}
                className="text-base rounded-md px-5 py-4 bg-card border-border"
              />
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-4 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Я согласен на{' '}
                  <a href="/privacy" className="text-primary hover:underline font-medium">
                    обработку персональных данных
                  </a>
                </Label>
                {errors.consent && (
                  <p className="text-sm text-destructive">{errors.consent}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full h-14 text-base rounded-md mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>
                  Отправка...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Записаться на тест-драйв
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-md rounded-md bg-card border-border">
          <DialogHeader className="text-center">
            <div className="mx-auto w-20 h-20 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <DialogTitle className="font-display uppercase text-2xl tracking-tight">Заявка отправлена!</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Спасибо за интерес к технике СНАРК. Наш менеджер свяжется с вами в течение 30 минут для уточнения деталей тест-драйва.
            </DialogDescription>
          </DialogHeader>
          <Button variant="primary" onClick={() => setIsSuccess(false)} className="mt-6 h-12 rounded-md">
            Понятно
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  )
}
