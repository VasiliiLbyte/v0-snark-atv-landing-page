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
    <section id="contacts" className="py-28 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Связь с нами</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
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
            className="inline-flex items-center gap-4 text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            8 800 333 50 59
          </a>
          <p className="text-muted-foreground mt-4 text-lg">Бесплатно по России</p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {locations.map((location) => (
            <div key={location.city} className="bg-background border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {location.city}
                  </h3>
                  <p className="text-sm text-primary font-semibold mt-1">{location.type}</p>
                  <div className="mt-5 space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      {location.address}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      {location.phone}
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      {location.email}
                    </p>
                    <p className="flex items-center gap-3">
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
        <div className="bg-background border border-border rounded-2xl overflow-hidden mb-16">
          <div className="aspect-[21/9] bg-secondary/50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground font-medium">
                Карта будет добавлена позже
              </p>
            </div>
          </div>
        </div>

        {/* Social links and CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <span className="text-muted-foreground font-medium">Мы в соцсетях:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-background border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  aria-label={link.name}
                >
                  <span className="text-sm font-bold">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <Button asChild size="lg" className="px-8 h-14 rounded-xl">
            <Link href="#test-drive">Заказать звонок</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
