import { Factory, Users, Award, Clock } from 'lucide-react'

const timelineEvents = [
  { year: '1991', title: 'Основание Петропласт', description: 'Начало производства техники в Санкт-Петербурге' },
  { year: '2015', title: 'Запуск линейки СНАРК', description: 'Первый вездеход на базе двигателя Toyota' },
  { year: '2020', title: 'Расширение производства', description: 'Открытие второго завода в Дзержинске' },
  { year: '2024', title: 'СНАРК 1800', description: 'Флагманская модель с улучшенными характеристиками' },
]

const stats = [
  { icon: Clock, value: '30+', label: 'лет опыта' },
  { icon: Factory, value: '2', label: 'производственных комплекса' },
  { icon: Award, value: '1000+', label: 'часов испытаний' },
  { icon: Users, value: '500+', label: 'довольных клиентов' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              О компании СНАРК
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              СНАРК — дочернее предприятие компании Петропласт, основанной в 1991 году. 
              Более 30 лет мы производим технику для экстремальных условий России.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Наши вездеходы созданы для охотников, рыболовов, геологов и спасателей. 
              Каждая машина проходит 1000+ часов испытаний перед серийным производством. 
              Мы не продаём — мы даём уверенность в технике.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-lg">{event.year}</span>
                    <h3 className="text-foreground font-semibold mt-1">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{event.description}</p>
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
