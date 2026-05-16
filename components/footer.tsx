import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { href: '#advantages', label: 'Преимущества' },
  { href: '#specs', label: 'Характеристики' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#about', label: 'О компании' },
  { href: '#contacts', label: 'Контакты' },
]

const legalLinks = [
  { href: '/privacy', label: 'Политика конфиденциальности' },
  { href: '/terms', label: 'Пользовательское соглашение' },
]

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="container-page py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logos/snark-logo.svg"
                alt="СНАРК"
                className="h-10 w-auto transition-opacity hover:opacity-85"
                width={175}
                height={40}
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Российские вездеходы с двигателями Toyota.
              Собственное производство в Санкт-Петербурге с 1991 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-[0.18em] text-foreground mb-6">Навигация</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-[0.18em] text-foreground mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:88003335059"
                  className="flex items-center gap-3 font-mono tabular-nums text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  8 800 333 50 59
                </a>
              </li>
              <li>
                <a
                  href="tel:+78124479378"
                  className="flex items-center gap-3 font-mono tabular-nums text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (812) 447-93-78
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@snark.ru"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sales@snark.ru
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  Санкт-Петербург, Екатерининский пр., д. 1
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono uppercase text-xs tracking-[0.18em] text-foreground mb-6">Информация</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-14 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                © {new Date().getFullYear()} ООО «СНАРК ГРУП». Все права защищены.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Цены указаны с НДС 22%. Не является публичной офертой.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
