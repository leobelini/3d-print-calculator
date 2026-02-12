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

const sessions = [
  {
    title: 'Depreciação da Impressora',
    description: 'Informe dados sobre a depreciação da impressora.',
    icon: <PiPrinterBold className="text-3xl" />,
    form: PrinterDepreciationForm,
  },
  {
    title: 'Filamento',
    description: 'Informe dados sobre o filamento.',
    icon: <DiStreamline className="text-3xl" />,
    form: FilamentForm,
  },
  {
    title: 'Energia',
    description: 'Informe dados sobre o consumo de energia.',
    icon: <SlEnergy className="text-3xl" />,
    form: EnergyForm,
  },
  {
    title: 'Impressão',
    description: 'Informe dados sobre a impressão.',
    icon: <GiPorcelainVase className="text-3xl" />,
    form: PrintForm,
  },
  {
    title: 'Lucro',
    description: 'Informe dados sobre o lucro.',
    icon: <PiMoneyBold className="text-3xl" />,
    form: ProfitForm,
  },
]

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
        {sessions.map((session) => {
          const SessionForm = session.form
          return (
            <Fragment key={session.title as string}>
              {session.title !== sessions[0].title && <Separator />}
              <RenderSession
                key={session.title as string}
                title={session.title}
                description={session.description}
                icon={session.icon}
                children={<SessionForm form={form} />}
              />
            </Fragment>
          )
        })}
      </form>
    )
  },
})

Form.displayName = 'Form'

export { Form }
