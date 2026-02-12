import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAppForm } from '@/hooks/use-app-form'
import { InputGroupAddon } from '@/components/ui/input-group'

export const Route = createFileRoute('/')({
  component: App,
})

interface FormType {
  printerPrice: number // Preço da impressora R$ (Printer Price)
  printerLifetimeHours: number // Vida útil da impressora em horas (Printer Lifetime Hours)
  filamentCostPerKg: number // Custo do filamento por kg R$ (Filament Cost per Kg)
  filamentUsedGrams: number // Quantidade de filamento usado em gramas (Filament Used Grams)
  electricityCostPerKwh: number // Custo da eletricidade por kWh R$ (Electricity Cost per kWh)
  printerPowerConsumption: number // Consumo de energia da impressora em watts (Printer Power Consumption)
  printDurationHours: number // Duração da impressão em horas (Print Duration Hours)
  failureRatePercent: number // Taxa de falha em porcentagem (Failure Rate Percentage)
  profitMarginPercent: number // Margem de lucro em porcentagem (Profit Margin Percentage)
}

function App() {
  const form = useAppForm({
    defaultValues: {
      printerPrice: 0,
      printerLifetimeHours: 0,
      filamentCostPerKg: 0,
      filamentUsedGrams: 0,
      electricityCostPerKwh: 0,
      printerPowerConsumption: 0,
      printDurationHours: 0,
      failureRatePercent: 0,
      profitMarginPercent: 0,
    },
    onSubmit: (e) => {
      const values = e.value as FormType
      console.log('Form submitted with values:', values)
    },
  })

  return (
    <div className="flex flex-row w-full gap-4 p-4">
      <form
        className="flex flex-col gap-4 flex-1"
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit()
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Depreciação da Impressora</CardTitle>
            <CardDescription>
              Informe dados sobre a depreciação da impressora.
            </CardDescription>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>Filamento</CardTitle>
            <CardDescription>Informe dados sobre o filamento.</CardDescription>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>Energia</CardTitle>
            <CardDescription>
              Informe dados sobre o consumo de energia.
            </CardDescription>
          </CardHeader>
          <CardContent>
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

        <Card>
          <CardHeader>
            <CardTitle>Impressão</CardTitle>
            <CardDescription>Informe dados sobre a impressão.</CardDescription>
          </CardHeader>
          <CardContent>
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
          <CardContent>
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
      <div className="flex flex-col gap-4 flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Resultados do Cálculo</CardTitle>
            <CardDescription>
              Aqui você verá os resultados do cálculo baseado nos dados
              fornecidos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lucro</CardTitle>
            <CardDescription>
              Detalhes sobre o lucro calculado com base na margem de lucro e nos
              custos informados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
