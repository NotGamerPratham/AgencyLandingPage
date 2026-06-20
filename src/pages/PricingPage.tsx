import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const plans = [
  {
    name: 'Starter',
    price: '5,000',
    description: 'Perfect for startups and small projects looking to establish their digital footprint.',
    features: [
      { name: 'Brand Strategy Session', included: true },
      { name: '5-Page Website Design', included: true },
      { name: 'Responsive Development', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: '2 Revision Rounds', included: true },
      { name: '30-Day Support', included: true },
      { name: 'CMS Integration', included: false },
      { name: 'Custom Animations', included: false },
      { name: 'Dedicated Project Manager', included: false },
    ],
  },
  {
    name: 'Growth',
    price: '15,000',
    description: 'For growing businesses ready to scale with a comprehensive digital experience.',
    popular: true,
    features: [
      { name: 'Everything in Starter', included: true },
      { name: 'Full Brand Identity', included: true },
      { name: '12-Page Website / Web App', included: true },
      { name: 'Custom Animations', included: true },
      { name: 'CMS Integration', included: true },
      { name: 'Performance Optimization', included: true },
      { name: '3 Revision Rounds', included: true },
      { name: '60-Day Support', included: true },
      { name: 'Dedicated Project Manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: '30,000+',
    description: 'For established organizations needing custom solutions at scale.',
    features: [
      { name: 'Everything in Growth', included: true },
      { name: 'Custom Web Application', included: true },
      { name: 'Dedicated Project Manager', included: true },
      { name: 'API Integrations', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Load Testing & Optimization', included: true },
      { name: 'Unlimited Revisions', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Ongoing Maintenance', included: true },
    ],
  },
]

const faqs = [
  { q: 'What happens after I submit my project details?', a: 'We\'ll review your submission within 24 hours and schedule a free discovery call to discuss your goals, timeline, and budget in detail.' },
  { q: 'Can I customize a plan?', a: 'Absolutely. All plans are starting points — we tailor every engagement to your specific needs. Contact us for a custom quote.' },
  { q: 'Do you offer payment plans?', a: 'Yes. We typically structure payments into 3 milestones: 30% upfront, 40% at design approval, and 30% at launch.' },
  { q: 'What if I need additional features mid-project?', a: 'We handle scope changes through a structured change order process, ensuring transparency on timeline and cost impacts.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer retainer-based maintenance packages for ongoing support, updates, and optimization after launch.' },
]

export default function PricingPage() {
  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">Pricing</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Transparent pricing for <span className="text-gradient">every stage</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              No hidden fees, no surprises. Just honest, value-based pricing aligned with your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? 'border-primary/40 bg-primary/5 shadow-xl shadow-primary/10 md:scale-105'
                    : 'border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80'
                }`}
              >
                {plan.popular && (
                  <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">${plan.price}</span>
                  {plan.name !== 'Enterprise' && <span className="text-sm text-muted-foreground ml-1">/project</span>}
                </div>
                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full mb-6" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary shrink-0" />
                      ) : (
                        <span className="w-4 h-4 shrink-0 block" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50 line-through'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-card/30 border-y border-border/50">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">FAQ</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Pricing <span className="text-gradient">questions</span>
            </h2>
          </motion.div>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-28">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Not sure which plan is right <span className="text-gradient">for you</span>?
            </h2>
            <p className="text-muted-foreground mb-8">Let&apos;s discuss your project and find the perfect fit.</p>
            <Button variant="default" size="xl" asChild className="group">
              <Link to="/contact">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
