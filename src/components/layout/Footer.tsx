import { Separator } from '@/components/ui/separator'
import { Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: 'Brand Strategy', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'UX Design', href: '/services' },
    { label: 'Digital Marketing', href: '/services' },
    { label: 'Product Design', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-primary">Nex</span>us
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crafting world-class digital experiences that drive growth and transform brands for the modern era.
            </p>
            <div className="flex gap-4 mt-6">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nexus Agency. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with precision in San Francisco
          </p>
        </div>
      </div>
    </footer>
  )
}
