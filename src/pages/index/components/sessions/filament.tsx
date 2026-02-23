import { withForm } from '@/hooks/use-app-form'
import { TooltipInfo } from '../tooltip-info'
import { normalizeNumericValue } from '@/lib/transform-values'
import { InputGroupAddon } from '@/components/ui/input-group'
import { defaultFormValues } from '../../types'

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

export { FilamentForm }
