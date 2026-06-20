import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow rounded-full" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="gold" className="mb-6 px-4 py-1.5 text-sm">
              <span className="inline-block w-2 h-2 bg-gold-500 rounded-full mr-2 animate-pulse-slow" />
              Now accepting new projects
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-balance"
          >
            We craft{' '}
            <span className="text-gradient">digital</span>
            <br />
            experiences that matter
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A premium digital agency partnering with forward-thinking brands to
            design and build products that people love.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="default" size="xl" asChild className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/work">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {['Google', 'Airbnb', 'Stripe', 'Spotify'].map((brand) => (
              <span
                key={brand}
                className="text-sm md:text-base font-semibold text-muted-foreground/40 tracking-widest uppercase"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
