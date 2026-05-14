import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AdvantagesSection } from '@/components/advantages-section'
import { SpecsSection } from '@/components/specs-section'
import { GallerySection } from '@/components/gallery-section'
import { AboutSection } from '@/components/about-section'
import { TestDriveSection } from '@/components/test-drive-section'
import { ContactsSection } from '@/components/contacts-section'
import { Footer } from '@/components/footer'
import { MobileCallButton } from '@/components/mobile-call-button'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <SpecsSection />
        <GallerySection />
        <AboutSection />
        <TestDriveSection />
        <ContactsSection />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  )
}
