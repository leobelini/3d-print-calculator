import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAppForm } from '@/hooks/use-app-form'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from '@/components/ui/table'
import { PageIndex, defaultFormValues } from '@/pages/index'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const form = useAppForm({
    defaultValues: defaultFormValues,
  })

  return (
    <div className="flex flex-row w-full gap-4 p-4">
      <PageIndex.Form form={form} />
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
            <Table>
              <TableCaption>Cálculo de Resultados</TableCaption>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Depreciação por hora
                  </TableCell>
                  <TableCell className="text-right">R$/h 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Custo de depreciação na peça
                  </TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Custo do filamento
                  </TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Custo de perda de filamento
                  </TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Custo de energia
                  </TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Custos extras</TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter className="bg-muted">
                <TableRow>
                  <TableCell>Custo total</TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Preço de venda sugerido</TableCell>
                  <TableCell className="text-right">R$ 0,00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
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
