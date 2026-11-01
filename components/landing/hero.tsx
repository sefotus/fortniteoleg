import Image from 'next/image'
import { Download, Play, Users, Trophy, Gamepad2 } from 'lucide-react'

const stats = [
  { icon: Users, value: '100', label: 'Players per match' },
  { icon: Gamepad2, value: '7+', label: 'Platforms' },
  { icon: Trophy, value: '1', label: 'Victory Royale' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 -z-10 size-[32rem] rounded-full bg-brand/30 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
            <span className="size-2 animate-pulse rounded-full bg-neon" aria-hidden="true" />
            Chapter 6 &middot; Season Live Now
          </p>

          <h1 className="font-display -skew-x-6 text-6xl uppercase leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-[8.5rem]">
            Where we <span className="block text-neon text-glow-neon">dropping?</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            Jump from the Battle Bus with 99 other players, loot legendary gear,
            build your way to the high ground and outlast the storm. Free to play,
            on every platform you love.
          </p>

          <div id="download" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.fortnite.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex -skew-x-6 items-center justify-center gap-3 rounded-md bg-neon px-8 py-4 font-display text-2xl uppercase tracking-wide text-primary-foreground glow-neon transition-transform hover:scale-105"
            >
              <Download className="size-6" aria-hidden="true" />
              Download Now
            </a>
            <a
              href="https://www.youtube.com/@Fortnite"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex -skew-x-6 items-center justify-center gap-3 rounded-md border-2 border-brand bg-brand/20 px-8 py-4 font-display text-2xl uppercase tracking-wide text-foreground backdrop-blur transition-all hover:bg-brand hover:glow-brand"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-background">
                <Play className="size-4 translate-x-px fill-current" aria-hidden="true" />
              </span>
              Watch Trailer
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                  <Icon className="size-3.5 text-brand" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-1 font-display text-4xl text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
