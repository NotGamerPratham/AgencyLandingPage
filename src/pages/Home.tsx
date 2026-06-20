import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import Statistics from '@/components/sections/Statistics'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import Team from '@/components/sections/Team'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Statistics />
      <Process />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
      <Contact />
      <CTA />
    </>
  )
}
