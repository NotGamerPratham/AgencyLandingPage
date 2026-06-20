import { motion } from 'framer-motion'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Twitter, Linkedin } from 'lucide-react'

const team = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', initials: 'AR' },
  { name: 'Priya Sharma', role: 'Lead Developer', initials: 'PS' },
  { name: 'James Kim', role: 'UX Director', initials: 'JK' },
  { name: 'Olivia Chen', role: 'Brand Strategist', initials: 'OC' },
  { name: 'Marco Silva', role: 'Frontend Architect', initials: 'MS' },
  { name: 'Sarah Johnson', role: 'Product Designer', initials: 'SJ' },
  { name: 'David Park', role: 'Full-Stack Engineer', initials: 'DP' },
  { name: 'Lena Müller', role: 'Project Manager', initials: 'LM' },
]

export default function Team() {
  return (
    <section className="relative py-28 md:py-36 bg-card/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Team</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Meet the <span className="text-gradient">minds</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A diverse team of creators, engineers, and strategists passionate about building exceptional work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group text-center p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-border/80 transition-all duration-500"
            >
              <Avatar className="w-16 h-16 mx-auto mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                <AvatarFallback className="bg-primary/10 text-primary text-lg font-display font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              <div className="flex items-center justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} Twitter`}>
                  <Twitter className="h-3.5 w-3.5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} LinkedIn`}>
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
