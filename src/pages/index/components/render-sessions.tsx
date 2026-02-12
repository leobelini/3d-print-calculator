import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState } from 'react'
import { LuChevronsUp, LuChevronsDown } from 'react-icons/lu'

interface RenderSessionsProps {
  title: React.ReactNode
  description: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
}

function RenderSession({
  title,
  description,
  children,
  icon,
}: RenderSessionsProps) {
  const [open, setOpen] = useState(true)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardAction>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <LuChevronsUp /> : <LuChevronsDown />}
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="flex flex-col gap-4">{children}</CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  )
}

RenderSession.displayName = 'RenderSession'

export { RenderSession }
