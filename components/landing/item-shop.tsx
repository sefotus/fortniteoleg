import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { VBucks } from './logo'
import { ShopCountdown } from './shop-countdown'
import { cn } from '@/lib/utils'

type ShopRarity = 'uncommon' | 'rare' | 'epic' | 'legendary'

type ShopItem = {
  name: string
  type: string
  price: number
  rarity: ShopRarity
  image: string
  featured?: 'hero' | 'wide'
  isNew?: boolean
}

const items: ShopItem[] = [
  { name: 'Drift Beat', type: 'Outfit', price: 2000, rarity: 'legendary', image: '/images/shop-skin-dj.png', featured: 'hero', isNew: true },
  { name: 'Nevermore', type: 'Outfit', price: 1500, rarity: 'epic', image: '/images/shop-skin-raven.png', featured: 'wide' },
  { name: 'Amethyst Edge', type: 'Pickaxe', price: 800, rarity: 'epic', image: '/images/shop-pickaxe.png' },
  { name: 'Sky Striker', type: 'Glider', price: 1200, rarity: 'rare', image: '/images/shop-glider.png', isNew: true },
  { name: 'Lift Off', type: 'Back Bling', price: 400, rarity: 'rare', image: '/images/shop-backpack.png' },
  { name: 'Prism Camo', type: 'Wrap', price: 500, rarity: 'uncommon', image: '/images/shop-wrap.png' },
  { name: 'Llama Groove', type: 'Emote', price: 300, rarity: 'uncommon', image: '/images/shop-emote.png' },
]

const rarityStyles: Record<ShopRarity, { bg: string; bar: string; label: string }> = {
  uncommon: { bg: 'from-[#6fd34a] to-[#1d5c17]', bar: 'bg-[#6fd34a]', label: 'Uncommon' },
  rare: { bg: 'from-[#4cc3ff] to-[#103e8a]', bar: 'bg-[#4cc3ff]', label: 'Rare' },
  epic: { bg: 'from-[#c86bff] to-[#3b0f63]', bar: 'bg-brand', label: 'Epic' },
  legendary: { bg: 'from-[#ffc46b] to-[#7a2c05]', bar: 'bg-legendary', label: 'Legendary' },
}

export function ItemShop() {
  return (
    <section id="item-shop" className="relative scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Daily Item Shop"
            title="Fresh"
            highlight="Drip"
            description="New cosmetics rotate in every day. Grab them before they vault."
          />
          <ShopCountdown />
        </div>

        <ul className="mt-12 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const style = rarityStyles[item.rarity]
            return (
              <li
                key={item.name}
                className={cn(
                  item.featured === 'hero' && 'col-span-2 md:row-span-2',
                  item.featured === 'wide' && 'col-span-2 md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1',
                )}
              >
                <article className="group relative flex h-full min-h-56 flex-col overflow-hidden rounded-xl border-2 border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:glow-neon">
                  <div className={cn('relative flex-1 bg-gradient-to-b', style.bg)}>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(255_255_255_/_0.35),transparent_65%)]"
                    />
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.type.toLowerCase()}`}
                      fill
                      sizes={item.featured ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                      className={cn(
                        'object-cover transition-transform duration-500 group-hover:scale-110',
                        item.featured === 'wide' && 'object-[center_15%]',
                      )}
                    />
                    {item.isNew && (
                      <span className="absolute left-2 top-2 -skew-x-6 rounded-sm bg-neon px-2 py-0.5 font-display text-sm uppercase tracking-wider text-primary-foreground">
                        New!
                      </span>
                    )}
                  </div>

                  <div className={cn('h-1 w-full', style.bar)} aria-hidden="true" />

                  <div className="flex items-end justify-between gap-2 bg-background/95 p-3 sm:p-4">
                    <div className="min-w-0">
                      <h3 className={cn('truncate font-display uppercase leading-tight tracking-wide', item.featured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl')}>
                        {item.name}
                      </h3>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {style.label} &middot; {item.type}
                      </p>
                    </div>
                    <p className="flex shrink-0 items-center gap-1.5 font-display text-lg text-foreground">
                      <VBucks />
                      <span>{item.price.toLocaleString('en-US')}</span>
                      <span className="sr-only">V-Bucks</span>
                    </p>
                  </div>
                </article>
              </li>
            )
          })}

          <li>
            <a
              href="#download"
              className="flex h-full min-h-56 flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-brand/50 bg-brand/10 p-6 text-center transition-colors hover:border-neon hover:bg-brand/20"
            >
              <ShoppingCart className="size-8 text-neon" aria-hidden="true" />
              <span className="font-display text-2xl uppercase tracking-wide">View Full Shop</span>
              <span className="text-sm text-muted-foreground">Browse every offer in-game</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
