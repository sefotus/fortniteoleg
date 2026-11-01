import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display inline-block -skew-x-6 uppercase leading-none tracking-wide text-foreground',
        className,
      )}
    >
      Fort<span className="text-neon text-glow-neon">nite</span>
    </span>
  )
}

export function VBucks({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-5 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 to-sky-600 font-display text-[11px] leading-none text-white ring-2 ring-white/80',
        className,
      )}
    >
      V
    </span>
  )
}
