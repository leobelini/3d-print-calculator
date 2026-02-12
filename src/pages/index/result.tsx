import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableRow,
} from '@/components/ui/table'
import type { FormType } from './types'
import { Skeleton } from '@/components/ui/skeleton'

interface ResultProps {
  values: FormType
}

function Result({ values }: ResultProps) {
  const renderValue = (value: number) => {
    if (isNaN(value) || value === null || value === undefined || value === 0) {
      return <Skeleton className="w-20 h-5" />
    }
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const depreciationPerHour =
    values.printerPrice / (values.printerLifetimeHours || 1)
  const depreciationCost = depreciationPerHour * values.printDurationHours
  const filamentUsedKg = values.filamentUsedGrams / 1000
  const filamentCost = filamentUsedKg * values.filamentCostPerKg
  const failureRate = values.failureRatePercent / 100
  const filamentLossCost = filamentCost * failureRate
  const filamentCostWithFailure = filamentCost + filamentLossCost
  const powerInKw = values.printerPowerConsumption
  const energyConsumed = powerInKw * values.printDurationHours
  const energyCost = energyConsumed * values.electricityCostPerKwh
  const totalCost = depreciationCost + filamentCostWithFailure + energyCost
  const salePrice = totalCost * (1 + values.profitMarginPercent / 100)
  //   const profitValue = salePrice - totalCost
  //   const marginValue = (profitValue / salePrice) * 100

  return (
    <>
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
                <TableCell className="text-right">
                  {renderValue(depreciationPerHour)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Custo de depreciação na peça
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(depreciationCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Custo do filamento
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(filamentCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Custo de perda de filamento
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(filamentLossCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Custo de energia</TableCell>
                <TableCell className="text-right">
                  {renderValue(energyCost)}
                </TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell className="font-medium">Custos extras</TableCell>
                <TableCell className="text-right">R$ 0,00</TableCell>
              </TableRow> */}
            </TableBody>
            <TableFooter className="bg-muted">
              <TableRow>
                <TableCell>Custo total</TableCell>
                <TableCell className="text-right">
                  {renderValue(totalCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Preço de venda sugerido</TableCell>
                <TableCell className="text-right">
                  {renderValue(salePrice)}
                </TableCell>
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
    </>
  )
}

export { Result }
