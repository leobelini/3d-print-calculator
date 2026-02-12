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
    <div>
      <form
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
              children={(f) => <f.InputText label="Preço da Impressora" />}
            />
            <form.AppField
              name="printerLifetimeHours"
              children={(f) => (
                <f.InputText label="Vida útil da Impressora (horas)" />
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
                <f.InputText label="Custo do Filamento por Kg" />
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
                <f.InputText label="Custo da Eletricidade por kWh" />
              )}
            />
            <form.AppField
              name="printerPowerConsumption"
              children={(f) => (
                <f.InputText label="Consumo de Energia da Impressora (Watts)" />
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
                <f.InputText label="Quantidade de Filamento Usado (Gramas)" />
              )}
            />
            <form.AppField
              name="printDurationHours"
              children={(f) => (
                <f.InputText label="Duração da Impressão (horas)" />
              )}
            />
            <form.AppField
              name="failureRatePercent"
              children={(f) => <f.InputText label="Taxa de Falha (%)" />}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custo extras</CardTitle>
            <CardDescription>
              Informe dados sobre os custos extras.
            </CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lucro</CardTitle>
            <CardDescription>Informe dados sobre o lucro.</CardDescription>
          </CardHeader>
          <CardContent>
            <form.AppField
              name="profitMarginPercent"
              children={(f) => <f.InputText label="Margem de Lucro (%)" />}
            />
          </CardContent>
        </Card>
      </form>
      <div></div>
    </div>
  )
}
