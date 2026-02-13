import { Skeleton } from '@/components/ui/skeleton'
import { formatCurrency } from '@/lib/transform-values'

export function RenderCurrencyValue(value: number): React.ReactNode {
  const formatted = formatCurrency(value)

  if (!formatted) {
    return (
      <div className="flex justify-end">
        <Skeleton className="w-20 h-5" />
      </div>
    )
  }

  return formatted
}
