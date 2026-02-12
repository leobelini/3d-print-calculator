import { InputGroupAddon } from '@/components/ui/input-group'
import { withForm } from '@/hooks/use-app-form'
import { defaultFormValues } from '../types'

const PrinterDepreciationForm = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="printerPrice"
          children={(f) => (
            <f.InputGroupText
              label="Preço da Impressora"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>R$</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="printerLifetimeHours"
          children={(f) => (
            <f.InputGroupText
              label="Vida útil da Impressora"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>H</InputGroupAddon>}
            />
          )}
        />
      </>
    )
  },
})

PrinterDepreciationForm.displayName = 'PrinterDepreciationForm'

const FilamentForm = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="filamentCostPerKg"
          children={(f) => (
            <f.InputGroupText
              label="Custo do Filamento"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>R$/kg</InputGroupAddon>}
            />
          )}
        />
      </>
    )
  },
})

FilamentForm.displayName = 'FilamentForm'

const EnergyForm = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="electricityCostPerKwh"
          children={(f) => (
            <f.InputGroupText
              label="Custo da Eletricidade"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>R$/kWh</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="printerPowerConsumption"
          children={(f) => (
            <f.InputGroupText
              label="Consumo de Energia da Impressora"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>kW</InputGroupAddon>}
            />
          )}
        />
      </>
    )
  },
})

EnergyForm.displayName = 'EnergyForm'

const PrintForm = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="filamentUsedGrams"
          children={(f) => (
            <f.InputGroupText
              label="Quantidade de Filamento Usado"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>g</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="printDurationHours"
          children={(f) => (
            <f.InputGroupText
              label="Duração da Impressão"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>H</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="failureRatePercent"
          children={(f) => (
            <f.InputGroupText
              label="Taxa de Falha"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>%</InputGroupAddon>}
            />
          )}
        />
      </>
    )
  },
})

PrintForm.displayName = 'PrintForm'

const ProfitForm = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="profitMarginPercent"
          children={(f) => (
            <f.InputGroupText
              label="Margem de Lucro"
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>%</InputGroupAddon>}
            />
          )}
        />
      </>
    )
  },
})

ProfitForm.displayName = 'ProfitForm'

export {
  PrinterDepreciationForm,
  FilamentForm,
  EnergyForm,
  PrintForm,
  ProfitForm,
}
