import { InputGroupAddon } from '@/components/ui/input-group'
import { withForm } from '@/hooks/use-app-form'
import { normalizeNumericValue } from '@/lib/transform-values'
import { TooltipInfo } from '../tooltip-info'
import { defaultFormValues } from '../../types'

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

export { ProfitForm }
