import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Send, Mail, MapPin, Phone, Clock, Check } from 'lucide-react'
import { toast } from '@/lib/use-toast'

const contactInfo = [
  { icon: Mail, label: 'hello@nexus.agency', desc: 'Send us an email', href: 'mailto:hello@nexus.agency' },
  { icon: MapPin, label: 'San Francisco, CA', desc: 'Visit our studio', href: '#' },
  { icon: Phone, label: '+1 (555) 123-4567', desc: 'Give us a call', href: 'tel:+15551234567' },
  { icon: Clock, label: 'Mon–Fri, 9AM–6PM PST', desc: 'Office hours', href: '#' },
]

const offices = [
  { city: 'San Francisco', address: '548 Market Street, Suite 100', timezone: 'PST (UTC-8)' },
  { city: 'New York', address: '20 W 34th Street, Floor 5', timezone: 'EST (UTC-5)' },
  { city: 'London', address: '71 Queen Victoria Street', timezone: 'GMT (UTC+0)' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', budget: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    toast({ title: 'Message sent!', description: 'We\'ll get back to you within 24 hours.', variant: 'success' })
    setFormData({ name: '', email: '', company: '', phone: '', budget: '', message: '' })
    setSubmitting(false)
  }

  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">Get in Touch</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Let&apos;s start a <span className="text-gradient">conversation</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a personalized response.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3"
            >
              <h2 className="font-display text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <Input id="company" name="company" placeholder="Your company" value={formData.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">Estimated Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange as any}
                    className="flex h-12 w-full rounded-lg border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5,000 – $10,000</option>
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project, goals, and timeline..." value={formData.message} onChange={handleChange} required />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full group">
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">Contact information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h2 className="font-display text-xl font-semibold mb-6">Our offices</h2>
                <div className="space-y-5">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <div>
                        <div className="text-sm font-medium">{office.city}</div>
                        <div className="text-xs text-muted-foreground">{office.address}</div>
                        <div className="text-xs text-muted-foreground/60">{office.timezone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <Badge variant="gold" className="mb-3">Response time</Badge>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours on business days. For urgent inquiries, please call us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
