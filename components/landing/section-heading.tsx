import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  highlight: string
  description?: string
  align?: 'center' | 'left'
  children?: React.ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start',
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{eyebrow}</p>
      <h2 className="font-display -skew-x-6 text-5xl uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
        {title} <span className="text-neon text-glow-neon">{highlight}</span>
      </h2>
      {description && (
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
