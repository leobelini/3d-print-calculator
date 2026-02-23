import { withForm } from '@/hooks/use-app-form'
import { TooltipInfo } from '../tooltip-info'
import { InputGroupAddon } from '@/components/ui/input-group'
import { normalizeNumericValue } from '@/lib/transform-values'
import { defaultFormValues } from '../../types'

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
        <form.AppField
          name="printerDepreciation.printerPowerConsumption"
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

PrinterDepreciationForm.displayName = 'PrinterDepreciationForm'

export { PrinterDepreciationForm }
