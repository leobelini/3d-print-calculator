import { InputGroupText } from '@/components/form/input-group-text'
import { InputMask } from '@/components/form/input-mask'
import { InputText } from '@/components/form/input-text'
import { InputTimeDuration } from '@/components/form/input-time-duration'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    InputText,
    InputGroupText,
    InputMask,
    InputTimeDuration,
  },
  formComponents: {},
  fieldContext,
  formContext,
})

export { useAppForm, withForm, useFieldContext, useFormContext }
