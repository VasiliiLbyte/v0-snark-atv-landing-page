import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ArrowRight,
  Factory,
  Handshake,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Production = {
  city: string
  address: string
  phones: string[]
  email: string
  hours: string
}

type Dealer = {
  city: string
  type: string
  address: string
  phones: string[]
  website?: string
  websiteHref?: string
  hours: string
}

const production: Production = {
  city: 'Курган',
  address: 'Проспект Машиностроителей, д. 26',
  phones: ['8 800 333 50 59', '+7 (812) 447-93-78'],
  email: 'sales@snark.ru',
  hours: 'Пн-Пт: 9:00-18:00',
}

const dealers: Dealer[] = [
  {
    city: 'Москва',
    type: 'Официальный представитель',
    address: 'Сколковское ш., 31, ТЦ «Спортхит», Мотоцентр «Гризли»',
    phones: ['+7 (495) 137-09-89'],
    website: 'grizzly.ru',
    websiteHref: 'https://grizzly.ru',
    hours: 'Пн-Сб: 10:00-19:00',
  },
  {
    city: 'Санкт-Петербург',
    type: 'Официальный представитель',
    address: 'Екатерининский пр., д. 1',
    phones: ['+7 (812) 447-93-78'],
    website: 'snarkatv.ru',
    websiteHref: 'https://snarkatv.ru',
    hours: 'Пн-Пт: 9:00-18:00',
  },
  {
    city: 'Воронеж',
    type: 'Официальный представитель',
    address: 'пр. Патриотов, д. 11',
    phones: ['+7 (920) 454-66-66'],
    hours: 'Пн-Пт: 9:00-18:00',
  },
  {
    city: 'Нижний Новгород',
    type: 'Официальный представитель',
    address: 'пр. Ленина, 93г (ст.м. «Пролетарская»)',
    phones: ['+7 952 785-72-08'],
    website: 'medvednn-centre.ru',
    websiteHref: 'https://medvednn-centre.ru',
    hours: 'Пн-Пт: 9:00-18:00',
  },
]

function telHref(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, '')
  return `tel:${cleaned}`
}

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
        <div className="text-center mb-16 flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <a
              href={telHref('8 800 333 50 59')}
              className="font-mono tabular-nums text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors"
            >
              8 800 333 50 59
            </a>
            <a
              href={telHref('+7 (812) 447-93-78')}
              className="font-mono tabular-nums text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              +7 (812) 447-93-78
            </a>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-4">
            Бесплатно по России
          </p>
        </div>

        {/* Production — featured wide card */}
        <div className="relative mb-20 overflow-hidden rounded-md border border-primary/60 bg-card">
          <div className="absolute inset-0 bg-topo opacity-10 pointer-events-none" />
          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-14">
            <div className="flex flex-col">
              <span className="section-eyebrow inline-flex items-center gap-3">
                <Factory className="w-4 h-4" />
                Производство
              </span>
              <h3 className="font-display uppercase text-5xl md:text-6xl tracking-tight text-foreground mt-4 text-balance leading-[0.95]">
                {production.city}
              </h3>
              <p className="font-mono uppercase text-xs md:text-sm tracking-[0.22em] text-primary mt-5">
                Здесь рождается каждый СНАРК
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
                Производство на базе завода Вездеходы Бурлак
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Адрес
                </span>
                <p className="text-foreground break-words leading-relaxed">
                  {production.address}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  Телефоны
                </span>
                <div className="flex flex-col gap-1.5">
                  {production.phones.map((phone) => (
                    <a
                      key={phone}
                      href={telHref(phone)}
                      className="font-mono tabular-nums text-foreground hover:text-primary transition-colors break-words"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </span>
                <a
                  href={`mailto:${production.email}`}
                  className="text-foreground hover:text-primary transition-colors break-words"
                >
                  {production.email}
                </a>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  Часы работы
                </span>
                <p className="font-mono tabular-nums text-foreground break-words">
                  {production.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dealers heading */}
        <div className="flex flex-col gap-8 mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="section-eyebrow inline-block mb-3">Официальные представители</span>
            <h3 className="font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
              5 городов. Растём дальше.
            </h3>
            <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
              Хотите стать представителем СНАРК в своём регионе? Мы открыты к
              новым партнёрам в России и СНГ.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-md px-6 font-mono text-xs uppercase tracking-[0.18em] self-start md:self-end"
          >
            <a href="mailto:va.lastochkin@snark.ru">
              <Handshake className="w-4 h-4 mr-2" />
              Условия партнёрства
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>

        {/* Dealers grid 2×2 */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {dealers.map((dealer) => (
            <article
              key={dealer.city}
              className="bg-card border border-border rounded-md p-6 md:p-8 hover:border-primary/50 transition-all"
            >
              <header className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display uppercase text-2xl tracking-tight text-foreground break-words">
                    {dealer.city}
                  </h4>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mt-2">
                    {dealer.type}
                  </p>
                </div>
              </header>

              <dl className="mt-6 space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground/70" />
                  <span className="break-words leading-relaxed">{dealer.address}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground/70" />
                  <div className="flex flex-col gap-1.5 min-w-0">
                    {dealer.phones.map((phone) => (
                      <a
                        key={phone}
                        href={telHref(phone)}
                        className="font-mono tabular-nums hover:text-primary transition-colors break-words"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {dealer.website && dealer.websiteHref && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground/70" />
                    <a
                      href={dealer.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors break-words"
                    >
                      {dealer.website}
                    </a>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground/70" />
                  <span className="font-mono tabular-nums break-words">{dealer.hours}</span>
                </div>
              </dl>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
