import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { InputGroupAddon } from '@/components/ui/input-group'
import { withForm } from '@/hooks/use-app-form'
import { defaultFormValues } from './types'
import { Separator } from '@/components/ui/separator'

const Form = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <form
        className="flex flex-col gap-4 flex-1"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Depreciação da Impressora</CardTitle>
            <CardDescription>
              Informe dados sobre a depreciação da impressora.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
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
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Filamento</CardTitle>
            <CardDescription>Informe dados sobre o filamento.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
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
          </CardContent>
        </Card>
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Energia</CardTitle>
            <CardDescription>
              Informe dados sobre o consumo de energia.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
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
          </CardContent>
        </Card>
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Impressão</CardTitle>
            <CardDescription>Informe dados sobre a impressão.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
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
          </CardContent>
        </Card>
        <Separator />

        {/* <Card>
          <CardHeader>
            <CardTitle>Custo extras</CardTitle>
            <CardDescription>
              Informe dados sobre os custos extras.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
         */}

        <Card>
          <CardHeader>
            <CardTitle>Lucro</CardTitle>
            <CardDescription>Informe dados sobre o lucro.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
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
          </CardContent>
        </Card>
      </form>
    )
  },
})

export { Form }
