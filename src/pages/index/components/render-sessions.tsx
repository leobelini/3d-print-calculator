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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { LuChevronsUp, LuChevronsDown, LuSave } from 'react-icons/lu'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db/database'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface RenderSessionsProps {
  sessionKey: string
  title: React.ReactNode
  description: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
}

function RenderSession({
  sessionKey,
  title,
  description,
  children,
  icon,
}: RenderSessionsProps) {
  const [open, setOpen] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  const [presetName, setPresetName] = useState('')

  const settings = useLiveQuery(
    () => db.settings.where('sessionName').equals(sessionKey).toArray(),
    [sessionKey],
  )

  const options =
    settings?.map((setting) => ({
      label: setting.name,
      value: setting.id.toString(),
    })) || []

  options.unshift({ label: 'Novo', value: 'new' })

  const handleSavePreset = () => {
    if (selectedPreset === 'new') {
      setOpenDialog(true)
    } else {
      // Lógica para salvar o preset existente
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setPresetName('')
  }

  const handleCreatePreset = (name: string) => {
    if (!name) return

    db.settings
      .add({
        name,
        sessionName: sessionKey,
        values: {}, // Aqui você pode adicionar os dados do preset
      })
      .then(() => {
        setSelectedPreset(null)
        setPresetName('')
        setOpenDialog(false)
      })
  }

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {icon}
              {title}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardAction className="justify-end flex flex-row gap-2">
              <Button
                variant="ghost"
                size="icon"
                disabled={selectedPreset === null || selectedPreset === ''}
                onClick={handleSavePreset}
              >
                <LuSave />
              </Button>

              <Select
                onValueChange={(value) => setSelectedPreset(value)}
                value={selectedPreset || undefined}
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Selecione um preset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Presets salvos</SelectLabel>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon">
                  {open ? <LuChevronsUp /> : <LuChevronsDown />}
                </Button>
              </CollapsibleTrigger>
            </CardAction>
          </CardHeader>
          <CollapsibleContent>
            <CardContent className="flex flex-col gap-4">
              {children}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>

      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Novo Preset</DialogTitle>
            <DialogDescription>
              Você está prestes a criar um novo preset para a sessão "{title}".
              Por favor, insira um nome para o preset e clique em "Salvar".
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="preset-name" className="sr-only">
                Nome do Preset
              </Label>
              <Input
                id="preset-name"
                defaultValue=""
                placeholder="Digite o nome do preset"
                onChange={(e) => setPresetName(e.target.value)}
                value={presetName}
              />
            </div>
          </div>
          <DialogFooter className="justify-start ">
            <Button onClick={handleSavePreset}>Salvar</Button>
            <DialogClose className="ml-2">
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

RenderSession.displayName = 'RenderSession'

export { RenderSession }
