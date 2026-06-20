import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ArrowRight, Quote, Target, Heart, Zap, Globe, Award, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Target, title: 'Precision', desc: 'We believe in the power of meticulous craftsmanship. Every detail matters, and we never cut corners.' },
  { icon: Heart, title: 'Partnership', desc: 'We embed ourselves in your team, sharing knowledge and building relationships that extend beyond the project.' },
  { icon: Zap, title: 'Velocity', desc: 'Speed is a feature. We move fast without sacrificing quality, delivering value at every sprint.' },
  { icon: Globe, title: 'Impact', desc: 'We measure success by the real-world impact we create — for users, businesses, and communities.' },
]

const team = [
  { name: 'Alex Rivera', role: 'Founder & Creative Director', initials: 'AR', bio: '15+ years leading creative teams at top digital agencies. Obsessed with craft and storytelling.' },
  { name: 'Priya Sharma', role: 'Lead Developer', initials: 'PS', bio: 'Full-stack engineer with deep expertise in React, Node.js, and cloud architecture.' },
  { name: 'James Kim', role: 'UX Director', initials: 'JK', bio: 'Human-centered design advocate who has shaped experiences for millions of users.' },
  { name: 'Olivia Chen', role: 'Brand Strategist', initials: 'OC', bio: 'Brand builder who transforms complex ideas into compelling, memorable identities.' },
  { name: 'Marco Silva', role: 'Frontend Architect', initials: 'MS', bio: 'Animation and performance specialist who makes interfaces come alive.' },
  { name: 'Sarah Johnson', role: 'Product Designer', initials: 'SJ', bio: 'Design systems expert creating cohesive, scalable experiences across platforms.' },
  { name: 'David Park', role: 'Full-Stack Engineer', initials: 'DP', bio: 'Backend specialist focused on building robust, scalable API architectures.' },
  { name: 'Lena Müller', role: 'Project Manager', initials: 'LM', bio: 'Certified PMP who keeps complex projects on time, on budget, and on brand.' },
]

const milestones = [
  { year: '2017', event: 'Nexus founded in San Francisco' },
  { year: '2018', event: 'First enterprise client onboarded' },
  { year: '2019', event: 'Team expanded to 15 members' },
  { year: '2020', event: 'Launched remote-first operations' },
  { year: '2021', event: 'Delivered 50th project milestone' },
  { year: '2023', event: 'Opened New York studio' },
  { year: '2024', event: 'Named Top Design Agency by Clutch' },
  { year: '2025', event: 'Crossed $10M in lifetime revenue' },
]

export default function About() {
  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">About Us</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              We build digital products that <span className="text-gradient">change the game</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Nexus is a team of designers, engineers, and strategists united by a shared mission — to create digital experiences that make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
                Founded in 2017 with a simple belief
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                That great design and great engineering shouldn&apos;t be a trade-off. We set out to build an agency
                that could deliver both — with equal passion and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we&apos;re a team of 30+ creators working with startups and Fortune 500 companies alike,
                united by our commitment to craft, quality, and measurable impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-border/50 p-8 md:p-12"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-lg md:text-xl font-display font-medium leading-relaxed italic">
                &ldquo;We measure our success not by the awards we win, but by the impact we create for our clients and their users.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/20 text-primary">AR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold">Alex Rivera</div>
                  <div className="text-xs text-muted-foreground">Founder & Creative Director</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block text-center mb-4">Our Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              What we <span className="text-gradient">believe</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((v) => (
                <div key={v.title} className="p-6 rounded-2xl border border-border/50 bg-card/30 text-center hover:bg-card/60 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary block text-center mb-4">Timeline</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Our <span className="text-gradient">journey</span>
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <span className="text-xs font-semibold text-primary">{m.year}</span>
                    <p className="text-sm text-muted-foreground">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-card/30 border-y border-border/50">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Our Team</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Meet the <span className="text-gradient">people</span>
            </h2>
            <p className="mt-4 text-muted-foreground">A diverse group of creators passionate about building exceptional work.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border/80 transition-all duration-500"
              >
                <Avatar className="w-16 h-16 mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-display font-semibold">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground/70 leading-relaxed">{member.bio}</p>
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-3.5 w-3.5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Want to be part of the <span className="text-gradient">team</span>?
            </h2>
            <p className="text-muted-foreground mb-8">We&apos;re always looking for talented people to join us.</p>
            <Button variant="default" size="xl" asChild className="group">
              <a href="#">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
