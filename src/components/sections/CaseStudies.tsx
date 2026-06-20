import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const caseStudies = [
  {
    title: 'Fintech Platform Redesign',
    category: 'UX Design',
    description: 'Redesigned the core banking experience for a fintech startup, resulting in a 40% increase in user retention.',
    stats: '40%',
    statLabel: 'Retention Boost',
    color: 'from-emerald-500/20 to-cyan-500/20',
    accent: 'border-emerald-500/30',
  },
  {
    title: 'E-Commerce Ecosystem',
    category: 'Full-Stack Dev',
    description: 'Built a scalable e-commerce platform handling 2M+ monthly transactions with sub-100ms response times.',
    stats: '2M+',
    statLabel: 'Monthly Transactions',
    color: 'from-violet-500/20 to-purple-500/20',
    accent: 'border-violet-500/30',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile + Strategy',
    description: 'Created a telemedicine app that connected 50K+ patients with healthcare providers across 30 states.',
    stats: '50K+',
    statLabel: 'Active Patients',
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'border-amber-500/30',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Case Studies</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Work that <span className="text-gradient">speaks</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real projects with measurable results for ambitious companies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <Badge variant="gold" className="mb-3">{study.category}</Badge>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                </div>
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="text-right">
                    <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{study.stats}</div>
                    <div className="text-xs text-muted-foreground mt-1">{study.statLabel}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full shrink-0">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/work">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
