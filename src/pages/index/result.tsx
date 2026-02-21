import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody, TableCaption } from '@/components/ui/table'
import type { FormType } from './types'
import { Separator } from '@/components/ui/separator'
import { useCalculations } from './hooks/use-calculations'
import { TableRowWithInfo } from './components/table-row-with-info'
import { SummaryItem } from './components/summary-item'

interface ResultProps {
  values: FormType
}

function Result({ values }: ResultProps) {
  const calculations = useCalculations(values)

  return (
    <Card className="border-0 shadow-lg dark:shadow-blue-900/30 mt-2 bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900 dark:to-blue-950/30 py-0">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg py-4">
        <CardTitle className="text-white text-xl font-bold">
          Resultados do cálculo
        </CardTitle>
        <CardDescription className="text-blue-100">
          Aqui você verá os resultados do cálculo baseado nos dados fornecidos.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Table>
          <TableCaption>Cálculo de resultados</TableCaption>
          <TableBody>
            <TableRowWithInfo
              label="Depreciação por hora"
              value={calculations.depreciationPerHour}
              tooltipContent={
                <>
                  A depreciação por hora é calculada dividindo o preço da
                  impressora pelo número total de horas que ela pode ser usada
                  durante sua vida útil. <br /> Isso representa o custo de
                  desgaste e obsolescência da impressora para cada hora de uso.
                </>
              }
            />
            <TableRowWithInfo
              label="Custo de depreciação na peça"
              value={calculations.depreciationCost}
              tooltipContent={
                <>
                  O custo de depreciação na peça é calculado multiplicando a
                  depreciação por hora pelo número de horas que a impressora foi
                  usada para imprimir a peça. <br /> Isso representa o custo
                  associado ao desgaste da impressora para aquela peça
                  específica.
                </>
              }
            />
            <TableRowWithInfo
              label="Custo do filamento"
              value={calculations.filamentCost}
              tooltipContent={
                <>
                  O custo do filamento é calculado multiplicando a quantidade de
                  filamento usado (em kg) pelo custo por kg do filamento. <br />{' '}
                  Isso representa o custo do material consumido para imprimir a
                  peça.
                </>
              }
            />
            <TableRowWithInfo
              label="Custo de perda de filamento"
              value={calculations.filamentLossCost}
              tooltipContent={
                <>
                  O custo de perda de filamento representa o valor do filamento
                  que foi desperdiçado durante o processo de impressão. <br />{' '}
                  Isso pode incluir falhas na impressão, suportes removidos ou
                  qualquer outro desperdício de material.
                </>
              }
            />
            <TableRowWithInfo
              label="Custo de energia"
              value={calculations.energyCost}
              tooltipContent={
                <>
                  O custo de energia é calculado multiplicando a quantidade de
                  energia consumida (em kWh) pelo custo por kWh da eletricidade.{' '}
                  <br /> Isso representa o custo da energia elétrica utilizada
                  para imprimir a peça.
                </>
              }
            />
          </TableBody>
        </Table>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4 p-4">
          <SummaryItem
            label="Custo Total"
            value={calculations.totalCost}
            tooltipContent={
              <>
                O custo total é a soma de todos os custos envolvidos na
                impressão da peça, incluindo depreciação, custo do filamento,
                custo de perda de filamento e custo de energia.
                <br /> Ele representa o valor total gasto para produzir a peça.
              </>
            }
          />
          <SummaryItem
            label="Lucro Estimado"
            value={calculations.profitValue}
            valueClassName="text-green-600"
            tooltipContent={
              <>
                O lucro estimado é calculado subtraindo o custo total do preço
                de venda sugerido. <br /> Ele representa o valor potencial de
                lucro que pode ser obtido com a venda da peça com base nos
                custos calculados e na margem de lucro definida.
              </>
            }
          />
          <SummaryItem
            label="Preço de Venda Sugerido"
            value={calculations.salePrice}
            valueClassName="text-green-600"
            tooltipContent={
              <>
                O preço de venda sugerido é calculado multiplicando o custo
                total por (1 + margem de lucro). <br /> Ele representa o preço
                recomendado para vender a peça, levando em consideração os
                custos envolvidos e a margem de lucro desejada.
              </>
            }
          />
        </div>
      </CardContent>
    </Card>
  )
}

export { Result }
