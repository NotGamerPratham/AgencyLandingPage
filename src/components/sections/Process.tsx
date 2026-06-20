import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    number: '01',
    description: 'We dive deep into your business, market, and goals to uncover opportunities and define the strategic direction.',
  },
  {
    icon: PenTool,
    title: 'Design',
    number: '02',
    description: 'Our designers craft intuitive interfaces and compelling visual systems that bring your brand to life.',
  },
  {
    icon: Code2,
    title: 'Develop',
    number: '03',
    description: 'Using modern tech stacks, we build scalable, performant solutions with clean, maintainable code.',
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    number: '04',
    description: 'We deploy, monitor, and optimize continuously, ensuring your product evolves with user needs.',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Process</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How we <span className="text-gradient">create</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A proven methodology that ensures clarity, quality, and timely delivery.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                </div>

                <div className="relative flex items-center justify-center shrink-0">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary bg-background">
                    <span className="font-display text-xs font-bold text-primary">{step.number}</span>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
