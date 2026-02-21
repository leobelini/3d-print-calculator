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
    <div className="flex flex-col lg:flex-row w-full gap-4 p-4">
      <PageIndex.Form form={form} />
      <div className="flex flex-col gap-4 flex-1">
        <PageIndex.Result values={values} />
      </div>
    </div>
  )
}
