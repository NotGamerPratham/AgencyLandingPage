import { motion } from 'framer-motion'
import { Palmtree, Code2, Lightbulb, BarChart3, PenTool, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Brand Strategy',
    description: 'Data-driven brand positioning and identity systems that differentiate you in crowded markets.',
  },
  {
    icon: PenTool,
    title: 'UX & UI Design',
    description: 'Human-centered interfaces that blend aesthetics with usability for exceptional user journeys.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Performant, accessible, and scalable web applications using cutting-edge technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love to engage with daily.',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Growth-driven campaigns that convert audiences into loyal customers and brand advocates.',
  },
  {
    icon: Palmtree,
    title: 'Product Design',
    description: 'End-to-end product development from concept to launch with continuous iteration.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">What We Do</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to{' '}
            <span className="text-gradient">succeed</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From strategy to execution, we provide comprehensive services that transform your digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-border/80 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
