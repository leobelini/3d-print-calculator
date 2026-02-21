import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { ReactNode } from 'react'

interface NewPresetDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onClose: () => void
  presetName: string
  onPresetNameChange: (name: string) => void
  onCreatePreset: () => void
  sessionTitle: ReactNode
}

export function NewPresetDialog({
  open,
  onOpenChange,
  onClose,
  presetName,
  onPresetNameChange,
  onCreatePreset,
  sessionTitle,
}: NewPresetDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Novo Preset</DialogTitle>
          <DialogDescription>
            Você está prestes a criar um novo preset para a sessão "
            {sessionTitle}". Por favor, insira um nome para o preset e clique em
            "Salvar".
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="preset-name" className="sr-only">
              Nome do Preset
            </Label>
            <Input
              id="preset-name"
              placeholder="Digite o nome do preset"
              onChange={(e) => onPresetNameChange(e.target.value)}
              value={presetName}
            />
          </div>
        </div>
        <DialogFooter className="justify-start">
          <Button onClick={onCreatePreset}>Salvar</Button>
          <DialogClose className="ml-2">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

NewPresetDialog.displayName = 'NewPresetDialog'
