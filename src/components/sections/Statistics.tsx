import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Global Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient">
        {value}
      </div>
      <div className="mt-2 text-sm text-muted-foreground font-medium">{label}</div>
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="relative py-28 border-y border-border/50">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
