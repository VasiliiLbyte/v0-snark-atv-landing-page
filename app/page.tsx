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

export default function HomePage() {
  return (
    <>
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
