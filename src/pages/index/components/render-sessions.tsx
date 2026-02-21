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
        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 dark:shadow-blue-900/20 dark:hover:shadow-blue-900/40 py-0 gap-0">
          <CardHeader className="flex flex-col bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-blue-900/30 rounded-t-lg py-2">
            <div className="flex flex-row justify-between items-center w-full">
              <CardTitle className="flex items-center gap-3 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
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
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {description}
            </CardDescription>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="bg-white/50 dark:bg-slate-900/50">
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
