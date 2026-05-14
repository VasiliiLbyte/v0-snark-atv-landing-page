import { Shield, Factory, Award, TestTube } from 'lucide-react'

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
    <section id="advantages" className="py-28 md:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Преимущества</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Почему выбирают СНАРК
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            30 лет опыта производства техники для экстремальных условий. 
            Работает в -40°C, не подведёт.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary/0 group-hover:bg-primary rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
