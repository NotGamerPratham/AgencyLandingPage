import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, BloomTech',
    content: 'Nexus completely transformed our digital presence. Their strategic approach to design and development resulted in a platform that exceeded every metric we set. The team truly cares about the work.',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO, Finova',
    content: 'Working with Nexus felt like an extension of our own team. They understood our complex requirements immediately and delivered a solution that scaled effortlessly. Exceptional technical capability.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Product, Helix Health',
    content: 'Our users consistently praise the new interface. Nexus delivered a product that is both beautiful and highly functional. The attention to detail in every interaction is remarkable.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const goNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  return (
    <section className="relative py-28 md:py-36 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Testimonials</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What our <span className="text-gradient">clients</span> say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
                className="w-full text-center px-4"
              >
                <Quote className="mx-auto h-10 w-10 text-primary/30 mb-6" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3 mt-8">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary">
                      {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-semibold">{testimonials[current].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[current].role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
