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
import {
  PrinterDepreciationForm,
  EnergyForm,
  FilamentForm,
  PrintForm,
  ProfitForm,
} from './components/form-sessions'

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
