import { Factory, Users, Award, Clock } from 'lucide-react'

const timelineEvents = [
  { year: '1991', title: 'Основание Петропласт', description: 'Начало производства техники в Санкт-Петербурге' },
  { year: '2015', title: 'Запуск линейки СНАРК', description: 'Первый вездеход на базе двигателя Toyota' },
  { year: '2020', title: 'Расширение производства', description: 'Открытие второго завода в Дзержинске' },
  { year: '2024', title: 'СНАРК 1800', description: 'Флагманская модель с улучшенными характеристиками' },
]

const stats = [
  { icon: Clock, value: '30+', label: 'лет опыта' },
  { icon: Factory, value: '2', label: 'производства' },
  { icon: Award, value: '1000+', label: 'часов тестов' },
  { icon: Users, value: '500+', label: 'клиентов' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Text content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">О компании</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 text-balance">
              История СНАРК
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              СНАРК — дочернее предприятие компании Петропласт, основанной в 1991 году. 
              Более 30 лет мы производим технику для экстремальных условий России.
            </p>
            <p className="text-lg text-muted-foreground mb-12 text-pretty leading-relaxed">
              Наши вездеходы созданы для охотников, рыболовов, геологов и спасателей. 
              Каждая машина проходит 1000+ часов испытаний перед серийным производством. 
              Мы не продаём — мы даём уверенность в технике.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="relative pt-4">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-10">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                    <span className="text-primary font-bold text-xl">{event.year}</span>
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
