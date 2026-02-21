import { InputGroupAddon } from '@/components/ui/input-group'
import { withForm } from '@/hooks/use-app-form'
import { defaultFormValues } from '../types'
import { TooltipInfo } from './tooltip-info'
import { normalizeNumericValue } from '@/lib/transform-values'

const PrinterDepreciationForm = withForm({
  defaultValues: defaultFormValues,
  formId: 'printerDepreciation',
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="printerDepreciation.printerPrice"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Preço da impressora
                  <TooltipInfo content="Informe o preço de compra da impressora." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              addon={<InputGroupAddon>R$</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="printerDepreciation.printerLifetimeHours"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Vida útil da impressora
                  <TooltipInfo content="Informe a vida útil estimada da impressora em horas." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
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
  formId: 'filament',
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="filament.filamentCostPerKg"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Custo do filamento
                  <TooltipInfo content="Informe o custo do filamento por quilograma." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
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
  formId: 'energy',
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="energy.electricityCostPerKwh"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Custo da eletricidade
                  <TooltipInfo content="Informe o custo da eletricidade por quilowatt-hora." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
              addon={<InputGroupAddon>R$/kWh</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="energy.printerPowerConsumption"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Consumo de energia da impressora
                  <TooltipInfo content="Informe o consumo de energia da impressora em quilowatts." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
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
  formId: 'print',
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="print.filamentUsedGrams"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Quantidade de filamento usado
                  <TooltipInfo content="Informe a quantidade de filamento usado em gramas." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
              addon={<InputGroupAddon>g</InputGroupAddon>}
            />
          )}
        />
        <form.AppField
          name="print.printDurationHours"
          children={(f) => (
            <f.InputTimeDuration
              label={
                <>
                  Duração da impressão
                  <TooltipInfo content="Informe a duração da impressão." />
                </>
              }
            />
          )}
        />
        <form.AppField
          name="print.failureRatePercent"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Taxa de falha
                  <TooltipInfo content="Informe a taxa de falha em porcentagem." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
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
  formId: 'profit',
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="profit.profitMarginPercent"
          children={(f) => (
            <f.InputGroupText
              label={
                <>
                  Margem de lucro
                  <TooltipInfo content="Informe a margem de lucro em porcentagem." />
                </>
              }
              inputProps={{
                type: 'number',
                step: '0.01',
              }}
              transformValue={normalizeNumericValue}
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
