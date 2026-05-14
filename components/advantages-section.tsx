import { Shield, Factory, Award, TestTube } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const advantages = [
  {
    icon: Shield,
    title: 'Двигатель Toyota 1ZZ-FE',
    description: 'Надёжность японского автопрома. 140 л.с., проверенные миллионами километров по всему миру.',
  },
  {
    icon: Factory,
    title: 'Собственное производство',
    description: 'Контроль качества на каждом этапе. Завод в Санкт-Петербурге, полный цикл сборки.',
  },
  {
    icon: Award,
    title: 'Расширенная гарантия',
    description: 'Персональная сервисная поддержка. Запчасти в наличии, быстрое обслуживание.',
  },
  {
    icon: TestTube,
    title: '1000+ часов испытаний',
    description: 'Проверено в реальных условиях: грязь, снег, брод, экстремальные температуры.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Почему выбирают СНАРК
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            30 лет опыта производства техники для экстремальных условий. Работает в -40°, не подведёт.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={advantage.title}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
