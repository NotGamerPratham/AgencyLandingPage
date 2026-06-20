import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines vary by scope. A standard website takes 4–6 weeks, while more complex web applications can take 8–16 weeks. We\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What is your design process?',
    answer: 'We begin with discovery and research, then move through wireframing, visual design, prototyping, and user testing. You\'ll have visibility into every stage with regular check-ins and feedback opportunities.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes. All our plans include post-launch support. We also offer retainer-based maintenance packages for ongoing updates, monitoring, and optimization.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with modern tech stacks including React, Next.js, TypeScript, Node.js, Python, and cloud platforms like AWS and Vercel. We choose the best technology for each project\'s specific needs.',
  },
  {
    question: 'How do you handle pricing?',
    answer: 'We provide transparent, fixed-price quotes based on project scope. After an initial consultation, we\'ll send a detailed proposal with clear deliverables, milestones, and pricing.',
  },
  {
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely. We embrace existing brand systems and can work within your guidelines while pushing creative boundaries to elevate your brand\'s digital presence.',
  },
]

export default function FAQ() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Got <span className="text-gradient">questions?</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
