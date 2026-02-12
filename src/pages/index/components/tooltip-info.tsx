import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { FaQuestionCircle } from 'react-icons/fa'

function TooltipInfo({ content }: { content: React.ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <FaQuestionCircle className="text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  )
}

TooltipInfo.displayName = 'TooltipInfo'

export { TooltipInfo }
