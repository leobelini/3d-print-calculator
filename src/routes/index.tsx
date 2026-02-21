import { createFileRoute } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { PageIndex, defaultFormValues } from '@/pages/index'
import { useStore } from '@tanstack/react-form'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const form = useAppForm({
    defaultValues: defaultFormValues,
  })

  const values = useStore(form.store, (s) => s.values)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        {/* Page Header Section */}
        <div className="border-b bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 dark:from-slate-900/50 dark:via-blue-950/50 dark:to-slate-900/50">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Calculadora de Custos de Impressão 3D
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Calcule de forma precisa o custo total das suas impressões 3D.
                Considere filamento, energia elétrica, tempo de impressão,
                custos fixos e margem de lucro para precificar seus projetos com
                exatidão.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>Custos de Material</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>Energia Elétrica</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>Tempo & Mão de Obra</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>Margem de Lucro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 p-4">
          <PageIndex.Form form={form} />
          <div className="flex flex-col gap-4 flex-1 lg:sticky lg:top-20 lg:h-fit">
            <PageIndex.Result values={values} />
          </div>
        </div>
      </main>
    </div>
  )
}
