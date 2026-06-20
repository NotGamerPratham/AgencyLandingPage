import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react'

const projects = {
  'fintech-platform': {
    title: 'Fintech Platform Redesign',
    category: 'UX Design / Development',
    client: 'Bloom Financial',
    challenge: 'Bloom Financial\'s legacy banking platform was hindering user adoption with its outdated interface and complex workflows. Customers struggled to complete basic tasks, and the support team was overwhelmed with inquiries.',
    solution: 'We redesigned the entire banking experience from the ground up. Through extensive user research and iterative prototyping, we created an intuitive interface that simplified complex financial workflows while maintaining enterprise-grade security and compliance.',
    results: [
      { metric: '40%', label: 'User Retention Increase' },
      { metric: '60%', label: 'Support Ticket Reduction' },
      { metric: '3.2x', label: 'Task Completion Improvement' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Figma'],
    color: 'from-emerald-500/30 to-emerald-900/40',
  },
  'ecommerce-ecosystem': {
    title: 'E-Commerce Ecosystem',
    category: 'Full-Stack Development',
    client: 'ShopWave',
    challenge: 'ShopWave needed a scalable e-commerce platform that could handle rapid growth while maintaining blazing-fast performance. Their existing solution couldn\'t handle peak traffic and had frequent downtime.',
    solution: 'We architected a microservices-based platform with CDN-optimized content delivery, real-time inventory management, and an AI-powered recommendation engine. The system was designed for horizontal scaling from day one.',
    results: [
      { metric: '2M+', label: 'Monthly Transactions' },
      { metric: '99.99%', label: 'Uptime SLA' },
      { metric: '<100ms', label: 'Response Time' },
    ],
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Redis', 'Docker', 'Vercel'],
    color: 'from-violet-500/30 to-purple-900/40',
  },
  'healthcare-app': {
    title: 'Healthcare Telemedicine App',
    category: 'Mobile / Product Strategy',
    client: 'Helix Health',
    challenge: 'Helix Health needed to rapidly launch a HIPAA-compliant telemedicine platform to connect patients with healthcare providers across multiple states, each with different regulatory requirements.',
    solution: 'We built a cross-platform mobile application with end-to-end encryption, real-time video consultations, integrated scheduling, and an EHR system. The architecture was designed to adapt to varying state regulations.',
    results: [
      { metric: '50K+', label: 'Active Patients' },
      { metric: '4.8★', label: 'App Store Rating' },
      { metric: '30', label: 'States Covered' },
    ],
    technologies: ['React Native', 'Python', 'WebRTC', 'PostgreSQL', 'Azure', 'Twilio'],
    color: 'from-amber-500/30 to-orange-900/40',
  },
}

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects[id as keyof typeof projects]

  if (!project) {
    return (
      <div className="pt-40 pb-28 text-center">
        <div className="container max-w-lg">
          <h1 className="font-display text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Button variant="default" asChild><Link to="/work">View All Projects</Link></Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/work" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Badge variant="gold" className="mb-4">{project.category}</Badge>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{project.title}</h1>
            </div>
            <p className="text-muted-foreground text-lg">Client: <span className="text-foreground font-medium">{project.client}</span></p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-border/50 bg-card/30"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{r.metric}</div>
                <div className="text-sm text-muted-foreground mt-2">{r.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="secondary" className="text-sm px-4 py-1.5">{t}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-card/30 border-t border-border/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Have a similar <span className="text-gradient">project</span>?
            </h2>
            <p className="text-muted-foreground mb-8">We&apos;d love to hear about it.</p>
            <Button variant="default" size="xl" asChild className="group">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
