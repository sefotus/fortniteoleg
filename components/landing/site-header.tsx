'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#mechanics', label: 'Mechanics' },
  { href: '#battle-pass', label: 'Battle Pass' },
  { href: '#item-shop', label: 'Item Shop' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a href="#home" aria-label="Fortnite home">
          <Logo className="text-3xl lg:text-4xl" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden -skew-x-6 items-center gap-2 rounded-md bg-neon px-5 py-2.5 font-display text-lg uppercase tracking-wide text-primary-foreground glow-neon transition-transform hover:scale-105 sm:inline-flex"
          >
            <Zap className="size-4 fill-current" aria-hidden="true" />
            Play Free
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-muted md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl uppercase tracking-wide text-foreground hover:text-neon"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-neon py-3 font-display text-xl uppercase text-primary-foreground glow-neon"
          >
            <Zap className="size-5 fill-current" aria-hidden="true" />
            Play Free
          </a>
        </div>
      )}
    </header>
  )
}
