import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: '5,000',
    description: 'Perfect for startups and small projects looking to establish their digital footprint.',
    features: ['Brand Strategy Session', '5-Page Website Design', 'Responsive Development', 'Basic SEO Setup', '2 Revision Rounds', '30-Day Support'],
  },
  {
    name: 'Growth',
    price: '15,000',
    description: 'For growing businesses ready to scale with a comprehensive digital experience.',
    features: ['Everything in Starter', 'Full Brand Identity', '12-Page Website/Web App', 'Custom Animations', 'CMS Integration', 'Performance Optimization', '3 Revision Rounds', '60-Day Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '30,000+',
    description: 'For established organizations needing custom solutions at scale.',
    features: ['Everything in Growth', 'Custom Web Application', 'Dedicated Project Manager', 'API Integrations', 'Advanced Analytics', 'Load Testing & Optimization', 'Unlimited Revisions', 'Priority Support', 'Ongoing Maintenance'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Pricing</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Plans that <span className="text-gradient">scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transparent pricing tailored to your project needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-all duration-500 ${
                plan.popular
                  ? 'border-primary/40 bg-primary/5 shadow-xl shadow-primary/10 scale-105 md:scale-110'
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
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full mb-6"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
