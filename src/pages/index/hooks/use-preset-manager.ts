import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/db/database'

interface UsePresetManagerProps {
  sessionKey: string
  onValueLoaded: (values: any) => void
}

export function usePresetManager({
  sessionKey,
  onValueLoaded,
}: UsePresetManagerProps) {
  const [selectedPreset, setSelectedPreset] = useState<string>('')
  const [presetName, setPresetName] = useState('')
  const [openDialog, setOpenDialog] = useState(false)

  const settings = useLiveQuery(
    () => db.settings.where('sessionName').equals(sessionKey).toArray(),
    [sessionKey],
  )

  const presetOptions =
    settings?.map((setting) => ({
      label: setting.name,
      value: setting.id.toString(),
    })) || []

  const handlePresetChange = (value: string) => {
    setSelectedPreset(value)
    if (value === 'new') {
      setPresetName('')
      setOpenDialog(true)
      return
    }

    const preset = settings?.find((s) => s.id.toString() === value)
    if (preset) {
      onValueLoaded(preset.values)
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedPreset('')
    setPresetName('')
  }

  const handleSaveExistingPreset = (currentValues: any) => {
    const preset = settings?.find((s) => s.id.toString() === selectedPreset)
    if (preset) {
      db.settings.update(preset.id, { values: currentValues })
    }
  }

  const handleCreatePreset = (currentValues: any) => {
    if (!presetName) return

    db.settings.add({
      name: presetName,
      sessionName: sessionKey,
      values: currentValues,
    })

    setSelectedPreset('')
    setPresetName('')
    setOpenDialog(false)
  }

  const handleDeletePreset = () => {
    if (!selectedPreset || selectedPreset === 'new') return

    const preset = settings?.find((s) => s.id.toString() === selectedPreset)
    if (preset) {
      db.settings.delete(preset.id)
      setSelectedPreset('')
    }
  }

  return {
    selectedPreset,
    setSelectedPreset,
    presetName,
    setPresetName,
    openDialog,
    setOpenDialog,
    presetOptions,
    handlePresetChange,
    handleCloseDialog,
    handleSaveExistingPreset,
    handleCreatePreset,
    handleDeletePreset,
  }
}
