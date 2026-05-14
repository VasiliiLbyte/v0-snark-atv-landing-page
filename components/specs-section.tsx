'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Gauge, 
  Cog, 
  Compass, 
  Package,
  Info
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const specCategories = [
  {
    id: 'engine',
    label: 'Двигатель',
    icon: Gauge,
    specs: [
      { name: 'Модель двигателя', value: 'Toyota 1ZZ-FE', tooltip: 'Японский бензиновый двигатель, устанавливается на Toyota Corolla, Celica, Matrix' },
      { name: 'Объём', value: '1.8 л (1794 см³)' },
      { name: 'Мощность', value: '140 л.с. при 6400 об/мин' },
      { name: 'Крутящий момент', value: '171 Нм при 4200 об/мин' },
      { name: 'Тип топлива', value: 'АИ-92 / АИ-95' },
      { name: 'Расход топлива', value: '~10 л/100 км (смешанный)' },
    ],
  },
  {
    id: 'transmission',
    label: 'Трансмиссия',
    icon: Cog,
    specs: [
      { name: 'Привод', value: 'Постоянный полный 4x4' },
      { name: 'Тип КПП', value: 'Механическая / Вариатор (опция)' },
      { name: 'Блокировки', value: 'Пневматические межколёсные', tooltip: 'Передний и задний дифференциалы с пневмоблокировкой' },
      { name: 'Раздаточная коробка', value: 'С понижающим рядом' },
      { name: 'ЭПСМ', value: 'Электрический перекидной силовой модуль', tooltip: 'Система автоматического переключения между осями' },
    ],
  },
  {
    id: 'chassis',
    label: 'Ходовая',
    icon: Compass,
    specs: [
      { name: 'Подвеска', value: 'Независимая, двойные А-рычаги' },
      { name: 'Шины', value: 'Низкого давления, агрессивный протектор', tooltip: 'Возможна установка различных размеров под задачи клиента' },
      { name: 'Дорожный просвет', value: '350 мм' },
      { name: 'Максимальная скорость', value: '80 км/ч' },
      { name: 'Грузоподъёмность', value: '400 кг' },
      { name: 'Масса снаряжённая', value: '~750 кг' },
    ],
  },
  {
    id: 'equipment',
    label: 'Цены и опции',
    icon: Package,
    specs: [
      { name: 'Базовая цена (СНАРК 1800)', value: '2 511 167 ₽', tooltip: 'РРЦ с НДС 22%' },
      { name: 'Лебёдка REDBTR 4500 кг', value: '35 583 ₽' },
      { name: 'Лебёдка RUNVA 4500 кг', value: '55 917 ₽' },
      { name: 'Лебёдка RUNVA 6000 кг', value: '78 283 ₽' },
      { name: 'Лебёдка COMEUP 4000 кг', value: '84 383 ₽' },
      { name: 'Грузовые багажники', value: '40 667 ₽' },
      { name: 'Хабы отключения моста', value: '12 200 ₽' },
      { name: 'Агрессивная резина', value: '20 333 ₽' },
      { name: 'Канистра 10л с кронштейном', value: '10 167 ₽' },
      { name: 'Защита подножек', value: '5 083 ₽' },
      { name: 'Защита радиатора', value: '5 083 ₽' },
      { name: 'Кофр тканевый', value: '10 167 ₽' },
      { name: 'USB зарядка', value: '3 050 ₽' },
      { name: 'Прикуриватель', value: '3 050 ₽' },
    ],
  },
]

export function SpecsSection() {
  return (
    <section id="specs" className="py-28 md:py-40 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">Спецификации</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Технические характеристики
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            СНАРК 1800 — флагманская модель с двигателем Toyota. Все цены указаны с НДС 22%.
          </p>
        </div>

        {/* Tabs */}
        <TooltipProvider>
          <Tabs defaultValue="engine" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto gap-3 bg-transparent p-0 mb-12">
              {specCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-background border-2 border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary rounded-xl transition-all font-medium"
                >
                  <category.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {specCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-background border border-border rounded-2xl shadow-sm overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {category.label}
                      </h3>
                    </div>
                    <div className="space-y-0">
                      {category.specs.map((spec, index) => (
                        <div
                          key={spec.name}
                          className={`flex items-center justify-between py-5 ${
                            index !== category.specs.length - 1 ? 'border-b border-border' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-muted-foreground">{spec.name}</span>
                            {spec.tooltip && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className="text-muted-foreground/50 hover:text-primary transition-colors">
                                    <Info className="w-4 h-4" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{spec.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                          <span className="font-semibold text-foreground text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </TooltipProvider>
      </div>
    </section>
  )
}
