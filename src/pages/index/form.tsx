import { withForm } from '@/hooks/use-app-form'
import { defaultFormValues } from './types'
import { Separator } from '@/components/ui/separator'
import { PiMoneyBold, PiPrinterBold } from 'react-icons/pi'
import {
  PrinterDepreciationForm,
  EnergyForm,
  FilamentForm,
  PrintForm,
  ProfitForm,
} from './components/form-sessions'
import { RenderSession } from './components/render-sessions'
import { Fragment } from 'react'
import { DiStreamline } from 'react-icons/di'
import { SlEnergy } from 'react-icons/sl'
import { GiPorcelainVase } from 'react-icons/gi'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const sessions = [
  {
    title: 'Depreciação da Impressora',
    key: 'printer-depreciation',
    description: 'Informe dados sobre a depreciação da impressora.',
    icon: <PiPrinterBold className="text-3xl" />,
    form: PrinterDepreciationForm,
  },
  {
    title: 'Filamento',
    key: 'filament',
    description: 'Informe dados sobre o filamento.',
    icon: <DiStreamline className="text-3xl" />,
    form: FilamentForm,
  },
  {
    title: 'Energia',
    key: 'energy',
    description: 'Informe dados sobre o consumo de energia.',
    icon: <SlEnergy className="text-3xl" />,
    form: EnergyForm,
  },
  {
    title: 'Impressão',
    key: 'print',
    description: 'Informe dados sobre a impressão.',
    icon: <GiPorcelainVase className="text-3xl" />,
    form: PrintForm,
  },
  {
    title: 'Lucro',
    key: 'profit',
    description: 'Informe dados sobre o lucro.',
    icon: <PiMoneyBold className="text-3xl" />,
    form: ProfitForm,
  },
]

const Form = withForm({
  defaultValues: defaultFormValues,
  render: ({ form }) => {
    return (
      <ScrollArea className="flex flex-1 lg:max-h-[90dvh] pr-4">
        <form
          className="flex flex-col gap-4 flex-1"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          {sessions.map((session) => {
            const SessionForm = session.form
            const key = session.key
            return (
              <Fragment key={key}>
                {session.title !== sessions[0].title && <Separator />}
                <RenderSession
                  sessionKey={key}
                  title={session.title}
                  description={session.description}
                  icon={session.icon}
                  children={<SessionForm form={form} />}
                />
              </Fragment>
            )
          })}
        </form>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  },
})

Form.displayName = 'Form'

export { Form }
