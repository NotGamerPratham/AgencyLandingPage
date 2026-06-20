import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Lightbulb, Code2, PenTool, BarChart3, Smartphone, Palette, Layers, GitBranch, Globe, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    tagline: 'Position your brand for success',
    description: 'We craft brand identities that resonate deeply with your target audience through strategic positioning, visual identity systems, and compelling brand narratives.',
    features: ['Market Research & Analysis', 'Brand Positioning', 'Visual Identity Design', 'Brand Guidelines', 'Messaging Architecture', 'Competitive Audit'],
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: PenTool,
    title: 'UX & UI Design',
    tagline: 'Interfaces people love to use',
    description: 'Human-centered design that balances beauty with function. Every pixel serves a purpose in creating intuitive, accessible, and delightful user experiences.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Visual Design Systems', 'Interaction Design', 'Accessibility Audits', 'Design Tokens & Libraries'],
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    icon: Code2,
    title: 'Web Development',
    tagline: 'Performant, scalable, modern',
    description: 'We build web applications using cutting-edge technologies that deliver blazing-fast performance, rock-solid reliability, and exceptional developer experiences.',
    features: ['React / Next.js / TypeScript', 'Node.js / Python Backends', 'Headless CMS Integration', 'API Design & Development', 'Cloud Infrastructure (AWS/Vercel)', 'CI/CD Pipelines'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    tagline: 'Native-quality, cross-platform',
    description: 'We build mobile experiences that users love, leveraging React Native and Flutter for native-quality apps that work seamlessly across iOS and Android.',
    features: ['React Native / Flutter', 'iOS & Android Deployment', 'App Store Optimization', 'Push Notification Systems', 'Offline-First Architecture', 'Real-Time Sync'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    tagline: 'Growth through data-driven strategy',
    description: 'Data-informed marketing campaigns that drive measurable results — from SEO and content strategy to paid acquisition and conversion rate optimization.',
    features: ['SEO & Content Strategy', 'Paid Media Management', 'Conversion Rate Optimization', 'Email Marketing Automation', 'Analytics & Reporting', 'A/B Testing'],
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: Palette,
    title: 'Product Design',
    tagline: 'From concept to market leader',
    description: 'End-to-end product development that transforms ideas into market-ready digital products, with continuous iteration based on real user feedback and data.',
    features: ['Product Strategy & Roadmapping', 'MVP Development', 'Design Sprints', 'User Testing & Validation', 'Iterative Prototyping', 'Launch & Scale Strategy'],
    color: 'from-indigo-500/20 to-indigo-500/20',
  },
]

const process = [
  { step: '01', title: 'Discovery', icon: GitBranch, desc: 'We immerse ourselves in your business, market, and users to uncover real opportunities.' },
  { step: '02', title: 'Strategy', icon: Layers, desc: 'We develop a comprehensive plan aligned with your goals, budget, and timeline.' },
  { step: '03', title: 'Design', icon: Zap, desc: 'We create beautiful, functional designs validated through user testing and iteration.' },
  { step: '04', title: 'Develop', icon: Globe, desc: 'We engineer robust solutions using modern, battle-tested technologies.' },
  { step: '05', title: 'Launch', icon: Shield, desc: 'We deploy, monitor, and optimize to ensure a flawless go-live experience.' },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">Our Services</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              End-to-end digital <span className="text-gradient">expertise</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              From brand strategy to technical implementation, we provide every capability needed to build exceptional digital products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container space-y-12 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
                  <service.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 block">{service.tagline}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className={`flex-1 w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br ${service.color} border border-border/50 flex items-center justify-center`}>
                <service.icon className="h-20 w-20 text-primary/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-card/30 border-y border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">How We Work</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="text-gradient">process</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <p.icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold text-primary mb-1">{p.step}</div>
                <h3 className="text-sm font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to build something <span className="text-gradient">amazing</span>?
            </h2>
            <p className="text-muted-foreground mb-8">Let&apos;s discuss how we can help bring your vision to life.</p>
            <Button variant="default" size="xl" asChild className="group">
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
