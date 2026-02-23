import { withForm } from '@/hooks/use-app-form'
import { TooltipInfo } from '../tooltip-info'
import { InputGroupAddon } from '@/components/ui/input-group'
import { normalizeNumericValue } from '@/lib/transform-values'
import { defaultFormValues } from '../../types'

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

export { PrintForm }
