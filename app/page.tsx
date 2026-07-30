import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { StatsSection } from '@/components/stats-section'
import { PackagesSection } from '@/components/packages-section'
import { DestinationsSection } from '@/components/destinations-section'
import { ServicesSection } from '@/components/services-section'
import { AboutSection } from '@/components/about-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <PackagesSection />
        <DestinationsSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
