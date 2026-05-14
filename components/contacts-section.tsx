import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const locations = [
  {
    city: 'Санкт-Петербург',
    type: 'Производство и шоурум',
    address: 'Екатерининский пр., д. 1',
    phone: '8 800 333 50 59',
    email: 'sales@snark.ru',
    hours: 'Пн-Пт: 9:00-18:00',
  },
  {
    city: 'Москва',
    type: 'Дилерский центр',
    address: 'Адрес уточняется',
    phone: '8 800 333 50 59',
    email: 'moscow@snark.ru',
    hours: 'Пн-Сб: 10:00-19:00',
  },
  {
    city: 'Воронеж',
    type: 'Дилерский центр',
    address: 'Адрес уточняется',
    phone: '8 800 333 50 59',
    email: 'voronezh@snark.ru',
    hours: 'Пн-Пт: 9:00-18:00',
  },
]

const socialLinks = [
  { name: 'ВКонтакте', href: 'https://vk.com/snark', icon: 'VK' },
  { name: 'Telegram', href: 'https://t.me/snark', icon: 'TG' },
  { name: 'YouTube', href: 'https://youtube.com/@snark', icon: 'YT' },
]

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Контакты и дилеры
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Свяжитесь с нами или посетите ближайший шоурум для консультации
          </p>
        </div>

        {/* Main contact */}
        <div className="text-center mb-12">
          <a
            href="tel:88003335059"
            className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-8 h-8" />
            8 800 333 50 59
          </a>
          <p className="text-muted-foreground mt-2">Бесплатно по России</p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((location) => (
            <Card key={location.city} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {location.city}
                    </h3>
                    <p className="text-sm text-primary font-medium">{location.type}</p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <p>{location.address}</p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {location.phone}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {location.email}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {location.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-card border border-border rounded-lg overflow-hidden mb-12">
          <div className="aspect-[21/9] bg-secondary flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Карта будет добавлена позже
              </p>
            </div>
          </div>
        </div>

        {/* Social links and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Мы в соцсетях:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xs font-bold">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <Button asChild size="lg">
            <Link href="#test-drive">Заказать звонок</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
