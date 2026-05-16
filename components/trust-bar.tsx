type StatSize = 'lg' | 'sm'

type Stat = {
  value: string
  label: string
  size?: StatSize
}

const stats: Stat[] = [
  { value: '>15', label: 'Регионов РФ' },
  { value: '−30°C … +40°C', label: 'Рабочий диапазон', size: 'sm' },
  { value: '1000+', label: 'Часов тестов' },
  { value: 'Реестр', label: 'Минпромторга РФ' },
]

export function TrustBar() {
  return (
    <section className="relative bg-secondary py-12">
      <div className="container-page">
        <div className="text-center">
          <span className="section-eyebrow inline-block">Нам доверяют</span>
        </div>

        <div className="mt-6 flex overflow-x-auto snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:grid md:grid-cols-4 md:gap-0 md:overflow-visible md:px-0 md:snap-none md:divide-x md:divide-border">
          {stats.map((stat) => {
            const isSmall = stat.size === 'sm'
            return (
              <div
                key={stat.label}
                className="flex-shrink-0 w-[70%] sm:w-[40%] md:w-auto snap-start px-6 md:px-8 py-4 text-center"
              >
                <div
                  className={
                    isSmall
                      ? 'font-mono tabular-nums font-bold text-2xl md:text-3xl text-foreground leading-none'
                      : 'font-mono tabular-nums font-bold text-4xl md:text-5xl text-foreground leading-none'
                  }
                >
                  {stat.value}
                </div>
                <div className="mt-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Среди клиентов: охотхозяйства, туркомпании, геологоразведка, спасательные службы
        </p>
      </div>
    </section>
  )
}
