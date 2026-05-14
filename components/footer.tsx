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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                СНАРК
              </span>
            </Link>
            <p className="text-background/60 leading-relaxed mb-6">
              Российские вездеходы с двигателями Toyota. 
              Собственное производство в Санкт-Петербурге с 1991 года.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://vk.com/snark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-primary transition-all"
                aria-label="ВКонтакте"
              >
                <span className="text-xs font-bold">VK</span>
              </a>
              <a
                href="https://t.me/snark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-primary transition-all"
                aria-label="Telegram"
              >
                <span className="text-xs font-bold">TG</span>
              </a>
              <a
                href="https://youtube.com/@snark"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-background hover:bg-primary transition-all"
                aria-label="YouTube"
              >
                <span className="text-xs font-bold">YT</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Навигация</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:88003335059"
                  className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  8 800 333 50 59
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@snark.ru"
                  className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sales@snark.ru
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-background/60">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  Санкт-Петербург, Екатерининский пр., д. 1
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Информация</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} ООО «СНАРК ГРУП». Все права защищены.
            </p>
            <p className="text-sm text-background/50">
              Цены указаны с НДС 22%. Не является публичной офертой.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
