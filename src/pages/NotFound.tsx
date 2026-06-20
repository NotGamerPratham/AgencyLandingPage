import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <Button variant="default" size="xl" asChild className="group">
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
