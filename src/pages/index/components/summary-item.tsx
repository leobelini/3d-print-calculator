import { RenderCurrencyValue } from './render-currency-value'
import { TooltipInfo } from './tooltip-info'
import { cn } from '@/lib/utils'

interface SummaryItemProps {
  label: string
  value: number
  tooltipContent: React.ReactNode
  valueClassName?: string
}

export function SummaryItem({
  label,
  value,
  tooltipContent,
  valueClassName,
}: SummaryItemProps) {
  return (
    <div className="flex align-center justify-between gap-2 items-center">
      <div className="flex items-center gap-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <TooltipInfo content={tooltipContent} />
      </div>
      <div className={cn('text-2xl font-bold', valueClassName)}>
        {RenderCurrencyValue(value)}
      </div>
    </div>
  )
}
