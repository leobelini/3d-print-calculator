import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { FaQuestionCircle } from 'react-icons/fa'

const TooltipInfo = React.memo(({ content }: { content: React.ReactNode }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <FaQuestionCircle className="text-muted-foreground" />
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{content}</TooltipContent>
    </Tooltip>
  )
})

TooltipInfo.displayName = 'TooltipInfo'

export { TooltipInfo }
