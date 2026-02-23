import { withForm } from '@/hooks/use-app-form'
import { TooltipInfo } from '../tooltip-info'
import { normalizeNumericValue } from '@/lib/transform-values'
import { InputGroupAddon } from '@/components/ui/input-group'
import { defaultFormValues } from '../../types'

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
      </>
    )
  },
})

EnergyForm.displayName = 'EnergyForm'

export { EnergyForm }
