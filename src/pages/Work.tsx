import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'fintech-platform',
    title: 'Fintech Platform Redesign',
    category: 'UX Design / Development',
    client: 'Bloom Financial',
    description: 'A complete redesign of the core banking experience, transforming a legacy interface into a modern, intuitive platform that users love.',
    results: ['40% increase in user retention', '60% reduction in support tickets', '3.2x improvement in task completion'],
    color: 'from-emerald-600/30 to-emerald-900/30',
  },
  {
    id: 'ecommerce-ecosystem',
    title: 'E-Commerce Ecosystem',
    category: 'Full-Stack Development',
    client: 'ShopWave',
    description: 'A scalable e-commerce platform handling millions of monthly transactions with sub-100ms response times and 99.99% uptime.',
    results: ['2M+ monthly transactions', 'Sub-100ms response times', '99.99% uptime SLA'],
    color: 'from-violet-600/30 to-purple-900/30',
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Telemedicine App',
    category: 'Mobile / Product Strategy',
    client: 'Helix Health',
    description: 'A telemedicine application connecting patients with healthcare providers across 30 states with HIPAA-compliant infrastructure.',
    results: ['50K+ active patients', '4.8★ app store rating', '30 states covered'],
    color: 'from-amber-600/30 to-orange-900/30',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'UX Design / Frontend',
    client: 'DataVue',
    description: 'An enterprise analytics dashboard that transforms complex data into actionable insights with customizable visualizations.',
    results: ['85% user adoption rate', '45% decrease in time-to-insight', 'Enterprise-grade scalability'],
    color: 'from-blue-600/30 to-indigo-900/30',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity System',
    category: 'Brand Strategy / Design',
    client: 'Lumina',
    description: 'A comprehensive brand identity system for a luxury wellness startup, from logo and color palette to full digital and print guidelines.',
    results: ['Brand recognition +72%', '3x social media engagement', 'Featured in Design Week'],
    color: 'from-pink-600/30 to-rose-900/30',
  },
  {
    id: 'travel-platform',
    title: 'Travel Booking Platform',
    category: 'Web Development',
    client: 'Voyager',
    description: 'A global travel booking platform with real-time inventory management, dynamic pricing, and multi-language support.',
    results: ['15K+ daily bookings', '35 countries live', '10K+ concurrent users'],
    color: 'from-cyan-600/30 to-teal-900/30',
  },
]

export default function Work() {
  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">Our Work</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Selected <span className="text-gradient">projects</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Each project represents a partnership built on trust, creativity, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80 transition-all duration-500"
              >
                <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <ExternalLink className="h-12 w-12 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="gold">{project.category}</Badge>
                    <span className="text-xs text-muted-foreground">{project.client}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="space-y-1.5 mb-6">
                    {project.results.map((r) => (
                      <div key={r} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground">{r}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="group/btn">
                    <Link to={`/work/${project.id}`}>
                      View Case Study
                      <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-card/30 border-t border-border/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Want to be our next <span className="text-gradient">success story</span>?
            </h2>
            <p className="text-muted-foreground mb-8">Let&apos;s create something remarkable together.</p>
            <Button variant="default" size="xl" asChild className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
