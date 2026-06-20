import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import ServicesPage from '@/pages/Services'
import Work from '@/pages/Work'
import WorkDetail from '@/pages/WorkDetail'
import About from '@/pages/About'
import PricingPage from '@/pages/PricingPage'
import Blog from '@/pages/Blog'
import ContactPage from '@/pages/ContactPage'
import NotFound from '@/pages/NotFound'
import { Toaster } from '@/components/ui/toaster'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </BrowserRouter>
  )
}
