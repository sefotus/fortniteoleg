import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { BattlePass } from '@/components/landing/battle-pass'
import { ItemShop } from '@/components/landing/item-shop'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <BattlePass />
        <ItemShop />
      </main>
      <SiteFooter />
    </>
  )
}
