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
  TableRow,
} from '@/components/ui/table'
import type { FormType } from './types'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { TooltipInfo } from './components/tooltip-info'

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

  // Converte H:MM para horas decimais (ex: "1:30" -> 1.5)
  const convertTimeToHours = (time: string | number): number => {
    if (typeof time === 'number') return time
    if (!time || typeof time !== 'string') return 0

    const parts = time.split(':')
    if (parts.length !== 2) return 0

    const hours = parseInt(parts[0], 10) || 0
    const minutes = parseInt(parts[1], 10) || 0

    return hours + minutes / 60
  }

  const printDurationInHours = convertTimeToHours(values.printDurationHours)

  const depreciationPerHour =
    values.printerPrice / (values.printerLifetimeHours || 1)
  const depreciationCost = depreciationPerHour * printDurationInHours
  const filamentUsedKg = values.filamentUsedGrams / 1000
  const filamentCost = filamentUsedKg * values.filamentCostPerKg
  const failureRate = values.failureRatePercent / 100
  const filamentLossCost = filamentCost * failureRate
  const filamentCostWithFailure = filamentCost + filamentLossCost
  const powerInKw = values.printerPowerConsumption
  const energyConsumed = powerInKw * printDurationInHours
  const energyCost = energyConsumed * values.electricityCostPerKwh
  const totalCost = depreciationCost + filamentCostWithFailure + energyCost
  const salePrice = totalCost * (1 + values.profitMarginPercent / 100)
  const profitValue = salePrice - totalCost

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Resultados do cálculo</CardTitle>
          <CardDescription>
            Aqui você verá os resultados do cálculo baseado nos dados
            fornecidos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Cálculo de resultados</TableCaption>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-1">
                  Depreciação por hora
                  <TooltipInfo
                    content={
                      <>
                        A depreciação por hora é calculada dividindo o preço da
                        impressora pelo número total de horas que ela pode ser
                        usada durante sua vida útil. <br /> Isso representa o
                        custo de desgaste e obsolescência da impressora para
                        cada hora de uso.
                      </>
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(depreciationPerHour)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-1">
                  Custo de depreciação na peça
                  <TooltipInfo
                    content={
                      <>
                        O custo de depreciação na peça é calculado multiplicando
                        a depreciação por hora pelo número de horas que a
                        impressora foi usada para imprimir a peça. <br /> Isso
                        representa o custo associado ao desgaste da impressora
                        para aquela peça específica.
                      </>
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(depreciationCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-1">
                  Custo do filamento
                  <TooltipInfo
                    content={
                      <>
                        O custo do filamento é calculado multiplicando a
                        quantidade de filamento usado (em kg) pelo custo por kg
                        do filamento. <br /> Isso representa o custo do material
                        consumido para imprimir a peça.
                      </>
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(filamentCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-1">
                  Custo de perda de filamento
                  <TooltipInfo
                    content={
                      <>
                        O custo de perda de filamento representa o valor do
                        filamento que foi desperdiçado durante o processo de
                        impressão. <br /> Isso pode incluir falhas na impressão,
                        suportes removidos ou qualquer outro desperdício de
                        material.
                      </>
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(filamentLossCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium flex items-center gap-1">
                  Custo de energia
                  <TooltipInfo
                    content={
                      <>
                        O custo de energia é calculado multiplicando a
                        quantidade de energia consumida (em kWh) pelo custo por
                        kWh da eletricidade. <br /> Isso representa o custo da
                        energia elétrica utilizada para imprimir a peça.
                      </>
                    }
                  />
                </TableCell>
                <TableCell className="text-right">
                  {renderValue(energyCost)}
                </TableCell>
              </TableRow>
              {/* <TableRow>
                <TableCell className="font-medium">Custos extras</TableCell>
                <TableCell className="text-right">R$ 0,00</TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
          <Separator className="my-4" />
          <div className="flex flex-col gap-4 p-4 ">
            <div className="flex align-center justify-between gap-2 items-center">
              <div className="flex items-center gap-1">
                <p className="text-sm text-muted-foreground">Custo Total</p>
                <TooltipInfo
                  content={
                    <>
                      O custo total é a soma de todos os custos envolvidos na
                      impressão da peça, incluindo depreciação, custo do
                      filamento, custo de perda de filamento e custo de energia.
                      <br /> Ele representa o valor total gasto para produzir a
                      peça.
                    </>
                  }
                />
              </div>
              <div className="text-2xl font-bold">{renderValue(totalCost)}</div>
            </div>
            <div className="flex align-center justify-between gap-2 items-center">
              <div className="flex items-center gap-1">
                <p className="text-sm text-muted-foreground">Lucro Estimado</p>
                <TooltipInfo
                  content={
                    <>
                      O lucro estimado é calculado subtraindo o custo total do
                      preço de venda sugerido. <br /> Ele representa o valor
                      potencial de lucro que pode ser obtido com a venda da peça
                      com base nos custos calculados e na margem de lucro
                      definida.
                    </>
                  }
                />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {renderValue(profitValue)}
              </div>
            </div>
            <div className="flex align-center justify-between gap-2 items-center">
              <div className="flex items-center gap-1">
                <p className="text-sm text-muted-foreground">
                  Preço de Venda Sugerido
                </p>
                <TooltipInfo
                  content={
                    <>
                      O preço de venda sugerido é calculado multiplicando o
                      custo total por (1 + margem de lucro). <br /> Ele
                      representa o preço recomendado para vender a peça, levando
                      em consideração os custos envolvidos e a margem de lucro
                      desejada.
                    </>
                  }
                />
              </div>
              <div className="text-2xl font-bold text-green-600">
                {renderValue(salePrice)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export { Result }
