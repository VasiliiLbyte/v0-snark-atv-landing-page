import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TrustBar } from '@/components/trust-bar'
import { AdvantagesSection } from '@/components/advantages-section'
import { SpecsSection } from '@/components/specs-section'
import { GallerySection } from '@/components/gallery-section'
import { AboutSection } from '@/components/about-section'
import { VideoGallerySection } from '@/components/video-gallery-section'
import { ContactsSection } from '@/components/contacts-section'
import { Footer } from '@/components/footer'
import JsonLd from '@/components/JsonLd'

export default function HomePage() {
  // Product schema for main model СНАРК 1800
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'СНАРК 1800',
    brand: {
      '@type': 'Brand',
      name: 'СНАРК',
    },
    description: 'Премиальный российский вездеход на колёсах низкого давления с двигателем Toyota 1ZZ-FE. 140 л.с., постоянный привод 4×4, 300 мм клиренс, 400 кг грузоподъёмность. Проходит 1000+ часов испытаний.',
    manufacturer: {
      '@type': 'Organization',
      name: 'ООО «СНАРК ГРУП»',
    },
    countryOfOrigin: 'Russia',
    category: 'Off-road vehicle / ATV / Snow and swamp vehicle',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'RUB',
      url: 'https://snarkatv.ru',
    },
  }

  // FAQ schema (key questions based on site content)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Сколько лошадиных сил у вездехода СНАРК 1800?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Вездеход СНАРК 1800 оснащён двигателем Toyota 1ZZ-FE мощностью 140 л.с.',
        },
      },
      {
        '@type': 'Question',
        name: 'Где производятся вездеходы СНАРК?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Основное производство расположено в Санкт-Петербурге. С 2025 года часть производства перенесена на завод «Вездеходы Бурлак» в Кургане.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько часов испытаний проходит вездеход СНАРК?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Каждая машина Проходит более 1000 часов реальных испытаний в самых сложных условиях: грязь, снег, брод, экстремальные температуры от -30°C до +40°C.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какой гарантия на вездеходы СНАРК?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Расширенная гарантия 1 год на все узлы и агрегаты.',
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={[productSchema, faqSchema]} />

      <Header />
      <main className="scroll-snap-y">
        <HeroSection />
        <TrustBar />
        <AdvantagesSection />
        <SpecsSection />
        <GallerySection />
        <AboutSection />
        <VideoGallerySection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  )
}
