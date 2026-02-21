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
    key: 'printerDepreciation' as const,
    description: 'Informe dados sobre a depreciação da impressora.',
    icon: <PiPrinterBold className="text-3xl" />,
    form: PrinterDepreciationForm,
  },
  {
    title: 'Filamento',
    key: 'filament' as const,
    description: 'Informe dados sobre o filamento.',
    icon: <DiStreamline className="text-3xl" />,
    form: FilamentForm,
  },
  {
    title: 'Energia',
    key: 'energy' as const,
    description: 'Informe dados sobre o consumo de energia.',
    icon: <SlEnergy className="text-3xl" />,
    form: EnergyForm,
  },
  {
    title: 'Impressão',
    key: 'print' as const,
    description: 'Informe dados sobre a impressão.',
    icon: <GiPorcelainVase className="text-3xl" />,
    form: PrintForm,
  },
  {
    title: 'Lucro',
    key: 'profit' as const,
    description: 'Informe dados sobre o lucro.',
    icon: <PiMoneyBold className="text-3xl" />,
    form: ProfitForm,
  },
] as const

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
          const key = session.key
          return (
            <Fragment key={key}>
              {session.title !== sessions[0].title && <Separator />}
              <RenderSession
                sessionKey={key}
                title={session.title}
                description={session.description}
                icon={session.icon}
                getFieldValue={() => form.getFieldValue(key)}
                setValue={(value: any) => form.setFieldValue(key, value)}
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
