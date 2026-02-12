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

interface FormType {}

function App() {
  const form = useAppForm({
    defaultValues: {
      name: '',
    },
    onSubmit: (values: FormType) => {
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
              name="name"
              children={(f) => <f.InputText label="Nome" />}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Filamento</CardTitle>
            <CardDescription>Informe dados sobre o filamento.</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Energia</CardTitle>
            <CardDescription>
              Informe dados sobre o consumo de energia.
            </CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impressão</CardTitle>
            <CardDescription>Informe dados sobre a impressão.</CardDescription>
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
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
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </form>
      <div></div>
    </div>
  )
}
