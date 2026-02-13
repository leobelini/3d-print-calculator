import { TableCell, TableRow } from '@/components/ui/table'
import { TooltipInfo } from './tooltip-info'
import { RenderCurrencyValue } from './render-currency-value'

interface TableRowWithInfoProps {
  label: string
  value: number
  tooltipContent: React.ReactNode
}

export function TableRowWithInfo({
  label,
  value,
  tooltipContent,
}: TableRowWithInfoProps) {
  return (
    <TableRow>
      <TableCell className="font-medium flex items-center gap-1">
        {label}
        <TooltipInfo content={tooltipContent} />
      </TableCell>
      <TableCell>{RenderCurrencyValue(value)}</TableCell>
    </TableRow>
  )
}
