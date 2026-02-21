import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { LuSave, LuTrash2 } from 'react-icons/lu'

interface PresetOption {
  label: string
  value: string
}

interface PresetSelectorProps {
  options: PresetOption[]
  selectedPreset: string
  onPresetChange: (value: string) => void
  onSavePreset: () => void
  onDeletePreset: () => void
}

export function PresetSelector({
  options,
  selectedPreset,
  onPresetChange,
  onSavePreset,
  onDeletePreset,
}: PresetSelectorProps) {
  const allOptions = [{ label: 'Novo', value: 'new' }, ...options]
  const isNewPreset = selectedPreset === 'new'
  const isPresetSelected = selectedPreset !== ''

  return (
    <div className="flex flex-row gap-2 w-full">
      <Button
        variant="ghost"
        size="icon"
        disabled={!isPresetSelected}
        onClick={onSavePreset}
        title="Salvar configuração"
      >
        <LuSave />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        disabled={isNewPreset || !isPresetSelected}
        onClick={onDeletePreset}
        title="Deletar configuração"
      >
        <LuTrash2 />
      </Button>

      <Select onValueChange={onPresetChange} value={selectedPreset}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione uma configuração" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Configurações salvas</SelectLabel>
            {allOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

PresetSelector.displayName = 'PresetSelector'
