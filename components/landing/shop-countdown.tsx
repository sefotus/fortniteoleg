'use client'

import { useEffect, useState } from 'react'
import { Timer } from 'lucide-react'

function msUntilUtcMidnight() {
  const now = new Date()
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1)
  return next - now.getTime()
}

function format(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const h = String(Math.floor(total / 3600)).padStart(2, '0')
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0')
  const s = String(total % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}

export function ShopCountdown() {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    setRemaining(msUntilUtcMidnight())
    const id = setInterval(() => setRemaining(msUntilUtcMidnight()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3">
      <Timer className="size-6 text-neon" aria-hidden="true" />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Shop resets in
        </p>
        <p className="font-display text-2xl tabular-nums tracking-wider" aria-live="off">
          {remaining === null ? '--:--:--' : format(remaining)}
        </p>
      </div>
    </div>
  )
}
