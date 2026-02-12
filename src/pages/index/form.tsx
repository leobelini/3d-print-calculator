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
import { PiPrinterBold } from 'react-icons/pi'

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
            <CardTitle className="flex items-center gap-2">
              <PiPrinterBold className="text-3xl" />
              Depreciação da Impressora
            </CardTitle>
            <CardDescription>
              Informe dados sobre a depreciação da impressora.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <PrinterDepreciationForm form={form} />
          </CardContent>
        </Card>
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Filamento</CardTitle>
            <CardDescription>Informe dados sobre o filamento.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <FilamentForm form={form} />
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
            <EnergyForm form={form} />
          </CardContent>
        </Card>
        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Impressão</CardTitle>
            <CardDescription>Informe dados sobre a impressão.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <PrintForm form={form} />
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
            <ProfitForm form={form} />
          </CardContent>
        </Card>
      </form>
    )
  },
})

Form.displayName = 'Form'

export { Form }
