import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">{children}</CardContent>
    </Card>
  )
}

RenderSession.displayName = 'RenderSession'

export { RenderSession }
