import { MapPin, Phone, Mail, Clock } from 'lucide-react'
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
    <section id="contacts" className="section snap-section bg-secondary/30 relative">
      <div className="container-page relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow inline-block mb-4">Связь с нами</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 text-balance">
            Контакты и дилеры
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Свяжитесь с нами или посетите ближайший шоурум
          </p>
        </div>

        {/* Main contact */}
        <div className="text-center mb-16">
          <a
            href="tel:88003335059"
            className="inline-flex items-center gap-4 font-mono tabular-nums text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <div className="w-16 h-16 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            8 800 333 50 59
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-4">Бесплатно по России</p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {locations.map((location) => (
            <div key={location.city} className="bg-card border border-border rounded-md p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display uppercase text-xl tracking-tight text-foreground">
                    {location.city}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary mt-2">{location.type}</p>
                  <div className="mt-5 space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-3 font-mono tabular-nums">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      {location.email}
                    </p>
                    <p className="flex items-center gap-3 font-mono tabular-nums">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      {location.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-card border border-border rounded-md overflow-hidden mb-16">
          <div className="aspect-[21/9] bg-secondary/50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Карта будет добавлена позже
              </p>
            </div>
          </div>
        </div>

        {/* Social links and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Мы в соцсетях:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-md bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={link.name}
                >
                  <span className="font-mono text-xs font-bold">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <Button asChild variant="primary" size="lg" className="px-8 h-14 rounded-md">
            <Link href="#test-drive">Заказать звонок</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
