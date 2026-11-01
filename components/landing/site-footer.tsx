/* eslint-disable @next/next/no-img-element */
import { Logo } from './logo'

const socials = [
  { slug: 'x', label: 'X (Twitter)', href: 'https://x.com/FortniteGame' },
  { slug: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@Fortnite' },
  { slug: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/fortnite' },
  { slug: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/fortnite' },
  { slug: 'discord', label: 'Discord', href: 'https://discord.gg/fortnite' },
  { slug: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@fortnite' },
]

const columns = [
  {
    title: 'Game',
    links: [
      { label: 'Battle Royale', href: '#home' },
      { label: 'Mechanics', href: '#mechanics' },
      { label: 'Battle Pass', href: '#battle-pass' },
      { label: 'Item Shop', href: '#item-shop' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Download', href: 'https://www.fortnite.com/download' },
      { label: 'Help Center', href: 'https://www.epicgames.com/help' },
      { label: 'Fan Content Policy', href: 'https://www.epicgames.com/site/en-US/fan-art-policy' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo className="text-4xl" />
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
              Drop in, gear up and fight for the Victory Royale. See you on the island.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => (
                <li key={social.slug}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-lg border border-border bg-muted transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand/20"
                  >
                    <img
                      src={`https://thesvg.org/icons/${social.slug}/mono.svg`}
                      alt=""
                      width={18}
                      height={18}
                      loading="lazy"
                      className="size-[18px] brightness-0 invert"
                    />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-xl uppercase tracking-wide">{col.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-neon"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-pretty">
            Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc.
            All rights reserved by Epic. This material is not official and is not endorsed by Epic.
            This is an unofficial fan-made page created under the Epic Games Fan Content Policy.
          </p>
          <p className="shrink-0">&copy; {new Date().getFullYear()} Fan Project</p>
        </div>
      </div>
    </footer>
  )
}
