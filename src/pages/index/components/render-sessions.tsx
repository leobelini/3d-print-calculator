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
        <Card variant="elevated">
          <CardHeader variant="secondary">
            <div className="flex flex-row justify-between items-center w-full">
              <CardTitle variant="secondary">
                {icon && (
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">
                    {icon}
                  </span>
                )}
                {title}
              </CardTitle>
              <CardAction className="justify-end flex flex-row gap-2">
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-blue-100 dark:hover:bg-blue-900/40"
                  >
                    {open ? (
                      <LuChevronsUp className="text-blue-600" />
                    ) : (
                      <LuChevronsDown className="text-blue-600" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </CardAction>
            </div>
            <CardDescription variant="secondary">{description}</CardDescription>
          </CardHeader>
          <CollapsibleContent>
            <CardContent variant="secondary">
              <div className="flex flex-col gap-4 pt-6 pb-6">
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
              </div>
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
