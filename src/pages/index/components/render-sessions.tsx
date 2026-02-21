import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
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
import { usePresetManager } from '../hooks/use-preset-manager'
import { PresetSelector } from './preset-selector'
import { NewPresetDialog } from './preset-dialog'

interface RenderSessionsProps {
  sessionKey: string
  title: React.ReactNode
  description: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
  getFieldValue: () => any
  setValue: (value: any) => void
}

function RenderSession({
  sessionKey,
  title,
  description,
  children,
  icon,
  getFieldValue,
  setValue,
}: RenderSessionsProps) {
  const [open, setOpen] = useState(true)

  const {
    selectedPreset,
    presetName,
    setPresetName,
    openDialog,
    presetOptions,
    handlePresetChange,
    handleCloseDialog,
    handleSaveExistingPreset,
    handleCreatePreset,
    handleDeletePreset,
  } = usePresetManager({
    sessionKey,
    onValueLoaded: setValue,
  })

  const handleSavePreset = () => {
    if (selectedPreset === 'new') {
      // Dialog will open automatically in handlePresetChange
    } else {
      handleSaveExistingPreset(getFieldValue())
    }
  }

  const handleCreateNewPreset = () => {
    handleCreatePreset(getFieldValue())
  }

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <Card>
          <CardHeader className="flex flex-col">
            <div className="flex flex-row justify-between items-center w-full">
              <CardTitle className="flex items-center gap-2">
                {icon}
                {title}
              </CardTitle>
              <CardAction className="justify-end flex flex-row gap-2">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon">
                    {open ? <LuChevronsUp /> : <LuChevronsDown />}
                  </Button>
                </CollapsibleTrigger>
              </CardAction>
            </div>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center">
                <PresetSelector
                  options={presetOptions}
                  selectedPreset={selectedPreset}
                  onPresetChange={handlePresetChange}
                  onSavePreset={handleSavePreset}
                  onDeletePreset={handleDeletePreset}
                />
              </div>
              {children}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      <NewPresetDialog
        open={openDialog}
        onOpenChange={handleCloseDialog}
        onClose={handleCloseDialog}
        presetName={presetName}
        onPresetNameChange={setPresetName}
        onCreatePreset={handleCreateNewPreset}
        sessionTitle={title}
      />
    </>
  )
}

RenderSession.displayName = 'RenderSession'

export { RenderSession }
