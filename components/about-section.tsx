import { Award, Clock } from 'lucide-react'

const timelineEvents = [
  { year: '1991', title: 'Основание Петропласт', description: 'Начало производства техники в Санкт-Петербурге' },
  { year: '2022', title: 'Запуск линейки СНАРК', description: 'Первый вездеход на базе двигателя Toyota' },
  { year: '2023', title: 'Расширение производства', description: 'Запуск серийного производства' },
  { year: '2025', title: 'Производство на базе завода Вездеходы Бурлак', description: 'Запуск серийного производства на мощностях завода Бурлак' },
]

const stats = [
  { icon: Clock, value: '30+', label: 'лет опыта' },
  { icon: Award, value: '1000+', label: 'часов тестов' },
]

export function AboutSection() {
  return (
    <section id="about" className="section snap-section bg-secondary/30 relative">
      <div className="container-page relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Text content */}
          <div>
            <span className="section-eyebrow inline-block mb-4">О компании</span>
            <h2 className="font-display uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8 text-balance">
              История СНАРК
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              СНАРК — дочернее предприятие компании Петропласт, основанной в 1991 году.
              Более 30 лет мы работаем в сфере автомобильной промышленности и сфере промышленной спецтехники.
            </p>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              Наши вездеходы созданы для охотников, рыболовов, геологов и спасателей.
              Каждая машина проходит 1000+ часов испытаний перед серийным производством.
              Мы не продаём — мы даём уверенность в технике.
            </p>

            {/* Stats grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-mono tabular-nums text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="relative pt-4">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-md bg-background border border-primary flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary" />
                  </div>

                  {/* Content */}
                  <div className="bg-card border border-border rounded-md p-6 hover:border-primary/50 transition-all">
                    <span className="font-mono tabular-nums text-primary font-bold text-xl">{event.year}</span>
                    <h3 className="text-foreground font-semibold text-lg mt-2">{event.title}</h3>
                    <p className="text-muted-foreground mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
