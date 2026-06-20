import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'The Future of Web Design: Trends Shaping 2026',
    excerpt: 'From micro-interactions to AI-driven personalization, explore the design trends that will define the next generation of digital experiences.',
    category: 'Design',
    date: 'June 15, 2026',
    readTime: '8 min read',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'How to Choose the Right Tech Stack for Your Startup',
    excerpt: 'A practical guide to evaluating technologies based on your product needs, team expertise, and growth trajectory.',
    category: 'Engineering',
    date: 'June 10, 2026',
    readTime: '12 min read',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Building a Brand That Resonates: A Strategic Framework',
    excerpt: 'Learn the systematic approach we use to build brands that connect emotionally with audiences and drive business results.',
    category: 'Brand Strategy',
    date: 'June 5, 2026',
    readTime: '10 min read',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'The ROI of Great UX: Why Design Is a Business Investment',
    excerpt: 'Data-backed insights on how investing in user experience directly impacts revenue, retention, and customer lifetime value.',
    category: 'UX Research',
    date: 'May 28, 2026',
    readTime: '7 min read',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Accessibility in 2026: Beyond Compliance to Inclusion',
    excerpt: 'Why accessibility should be a core design principle, not an afterthought — with practical implementation strategies.',
    category: 'Design',
    date: 'May 20, 2026',
    readTime: '9 min read',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'From MVP to Market Leader: A Product Development Roadmap',
    excerpt: 'A step-by-step guide to taking your digital product from concept to market leadership through iterative development.',
    category: 'Product',
    date: 'May 12, 2026',
    readTime: '11 min read',
    color: 'from-indigo-500/20 to-indigo-500/20',
  },
]

const categories = ['All', 'Design', 'Engineering', 'Brand Strategy', 'UX Research', 'Product']

export default function Blog() {
  return (
    <div>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow rounded-full" />
        <div className="container relative text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="gold" className="mb-6">Blog</Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Insights & <span className="text-gradient">ideas</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Thoughts on design, technology, and building digital products that matter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <Button key={cat} variant={cat === 'All' ? 'default' : 'outline'} size="sm" className="rounded-full">
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-border/80 hover:bg-card/60 transition-all duration-500"
              >
                <div className={`h-44 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <Badge variant="gold" className="bg-background/60 backdrop-blur-sm">{post.category}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-card/30 border-t border-border/50">
        <div className="container text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Stay in the <span className="text-gradient">loop</span>
            </h2>
            <p className="text-muted-foreground mb-8">Get our latest articles delivered to your inbox.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex h-12 w-full rounded-lg border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 focus-visible:outline-none focus-visible:border-primary/50 focus-visible:ring-1 focus-visible:ring-primary/30"
              />
              <Button variant="default" size="lg" className="shrink-0">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
