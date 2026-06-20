import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import { toast } from '@/lib/use-toast'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    toast({ title: 'Message sent!', description: 'We\'ll get back to you within 24 hours.', variant: 'success' })
    setFormData({ name: '', email: '', company: '', message: '' })
    setSubmitting(false)
  }

  const contactInfo = [
    { icon: Mail, label: 'hello@nexus.agency', href: 'mailto:hello@nexus.agency' },
    { icon: MapPin, label: 'San Francisco, CA', href: '#' },
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  ]

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Contact</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s build something <span className="text-gradient">great</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ready to start your project? Tell us about it and we&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <Input id="company" name="company" placeholder="Your company" value={formData.company} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required />
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
            className="md:col-span-2 space-y-8 pt-2"
          >
            {contactInfo.map((item) => (
              <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{item.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.href.startsWith('mailto') ? 'Send us an email' : item.href.startsWith('tel') ? 'Give us a call' : 'Visit our office'}
                  </div>
                </div>
              </a>
            ))}

            <div className="pt-4 border-t border-border/50">
              <Badge variant="gold" className="mb-3">Response Time</Badge>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
