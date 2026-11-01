import Image from 'next/image'
import { Lock, Sparkles, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { VBucks } from './logo'
import { cn } from '@/lib/utils'

type Rarity = 'epic' | 'legendary'

type Skin = {
  name: string
  set: string
  rarity: Rarity
  tier: number
  image: string
}

const skins: Skin[] = [
  { name: 'Jonesy', set: 'Survivor Squad', rarity: 'epic', tier: 1, image: '/images/skin-soldier.png' },
  { name: 'Peely', set: 'Fruit Punch', rarity: 'legendary', tier: 25, image: '/images/skin-banana.png' },
  { name: 'Neon Kunai', set: 'Cyber Clan', rarity: 'epic', tier: 50, image: '/images/skin-ninja.png' },
  { name: 'Sol Sentinel', set: 'Golden Order', rarity: 'legendary', tier: 100, image: '/images/skin-knight.png' },
]

const rarityStyles: Record<Rarity, { label: string; card: string; glow: string; badge: string }> = {
  epic: {
    label: 'Epic',
    card: 'from-[#c86bff] via-brand to-[#3b0f63]',
    glow: 'hover:shadow-[0_0_48px_rgb(163_61_242_/_0.6)]',
    badge: 'bg-brand text-white',
  },
  legendary: {
    label: 'Legendary',
    card: 'from-[#ffc46b] via-legendary to-[#7a2c05]',
    glow: 'hover:shadow-[0_0_48px_rgb(245_146_42_/_0.6)]',
    badge: 'bg-legendary text-primary-foreground',
  },
}

export function BattlePass() {
  return (
    <section id="battle-pass" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Chapter 6 Battle Pass"
            title="Unlock the"
            highlight="Legends"
            description="100 tiers of outfits, emotes, gliders and more. Level up by playing and earn back the V-Bucks you spend."
          />

          <div className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur sm:w-auto sm:min-w-80">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Season Progress
              </span>
              <span className="font-display text-2xl text-neon">Tier 42</span>
            </div>
            <div
              className="h-3 overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuenow={42}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Battle Pass tier progress"
            >
              <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-brand to-neon" />
            </div>
            <a
              href="#download"
              className="inline-flex -skew-x-6 items-center justify-center gap-2 rounded-md bg-neon px-5 py-3 font-display text-lg uppercase tracking-wide text-primary-foreground glow-neon transition-transform hover:scale-[1.03]"
            >
              Get Battle Pass
              <span className="flex items-center gap-1 skew-x-6">
                <VBucks className="size-5" />
                950
              </span>
            </a>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {skins.map((skin, index) => {
            const style = rarityStyles[skin.rarity]
            const locked = skin.tier > 42
            return (
              <li key={skin.name}>
                <article
                  className={cn(
                    'group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b p-1 transition-all duration-300 hover:-translate-y-2',
                    style.card,
                    style.glow,
                  )}
                >
                  <div className="relative h-full overflow-hidden rounded-xl">
                    <div
                      aria-hidden="true"
                      className={cn('absolute inset-0 bg-gradient-to-b opacity-90', style.card)}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(255_255_255_/_0.45),transparent_60%)]"
                    />
                    <Image
                      src={skin.image}
                      alt={`${skin.name} outfit`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className={cn(
                        'object-cover object-top mix-blend-normal transition-transform duration-500 group-hover:scale-110',
                        index % 2 === 0 ? 'animate-float' : '',
                      )}
                    />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                      <span className={cn('rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest', style.badge)}>
                        {style.label}
                      </span>
                      <span className="flex items-center gap-1 rounded-sm bg-background/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground backdrop-blur">
                        {locked ? <Lock className="size-3" aria-hidden="true" /> : <Star className="size-3 fill-neon text-neon" aria-hidden="true" />}
                        Tier {skin.tier}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-16">
                      <p className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <Sparkles className="size-3 text-neon" aria-hidden="true" />
                        {skin.set}
                      </p>
                      <h3 className="font-display text-2xl uppercase leading-tight tracking-wide sm:text-3xl">
                        {skin.name}
                      </h3>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
