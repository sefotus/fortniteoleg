import { Crosshair, Hammer, Crown, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Feature = {
  icon: LucideIcon
  step: string
  title: string
  description: string
  accent: 'brand' | 'neon'
}

const features: Feature[] = [
  {
    icon: Crosshair,
    step: '01',
    title: 'Drop & Loot',
    description:
      'Leap from the Battle Bus, glide to your favorite POI and crack open chests for weapons, heals and rare mythic items.',
    accent: 'brand',
  },
  {
    icon: Hammer,
    step: '02',
    title: 'Build & Fight',
    description:
      'Harvest materials and throw up walls, ramps and towers in seconds. Out-build and out-edit your opponents to take the high ground.',
    accent: 'neon',
  },
  {
    icon: Crown,
    step: '03',
    title: 'Victory Royale',
    description:
      'Survive the closing storm and be the last player or squad standing. Claim the crown and earn bragging rights.',
    accent: 'brand',
  },
]

export function Features() {
  return (
    <section id="mechanics" className="relative scroll-mt-20 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Mechanics"
          title="Drop. Build."
          highlight="Win."
          description="Three simple steps between you and the crown. Master them all to become a legend."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, step, title, description, accent }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/60"
            >
              <div
                aria-hidden="true"
                className={
                  accent === 'neon'
                    ? 'absolute -right-16 -top-16 size-48 rounded-full bg-neon/10 blur-3xl transition-opacity group-hover:bg-neon/20'
                    : 'absolute -right-16 -top-16 size-48 rounded-full bg-brand/20 blur-3xl transition-opacity group-hover:bg-brand/35'
                }
              />
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 font-display text-7xl text-foreground/5"
              >
                {step}
              </span>

              <div
                className={
                  accent === 'neon'
                    ? 'flex size-14 -skew-x-6 items-center justify-center rounded-lg bg-neon text-primary-foreground glow-neon'
                    : 'flex size-14 -skew-x-6 items-center justify-center rounded-lg bg-brand text-white glow-brand'
                }
              >
                <Icon className="size-7" aria-hidden="true" />
              </div>

              <h3 className="mt-8 font-display text-3xl uppercase tracking-wide">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
