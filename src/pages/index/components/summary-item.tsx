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
    <div className="flex align-center justify-between gap-2 items-center p-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800/30 dark:to-blue-900/20 hover:shadow-md transition-shadow duration-200 border border-blue-100/30 dark:border-blue-900/30">
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </p>
        <TooltipInfo content={tooltipContent} />
      </div>
      <div
        className={cn(
          'text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
          valueClassName,
        )}
      >
        {RenderCurrencyValue(value)}
      </div>
    </div>
  )
}
