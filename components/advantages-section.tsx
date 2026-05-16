import { Shield, Factory, Award, TestTube } from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'Двигатель Toyota 1ZZ-FE',
    description: 'Надёжность японского автопрома. 140 л.с., проверенные миллионами километров по всему миру.',
  },
  {
    icon: Factory,
    title: 'Произведено на заводе Бурлак',
    description: 'Контроль качества на каждом этапе. Завод в городе Курган, полный цикл сборки.',
  },
  {
    icon: Award,
    title: 'Расширенная гарантия 1 год на все узлы и агрегаты',
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
    <section id="advantages" className="section snap-section bg-background relative">
      <div className="container-page relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow inline-block mb-4">Преимущества</span>
          <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground text-balance">
            Почему выбирают СНАРК
          </h2>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative p-8 rounded-md bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
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
              <div className="absolute bottom-0 left-8 right-8 h-px bg-primary/0 group-hover:bg-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
