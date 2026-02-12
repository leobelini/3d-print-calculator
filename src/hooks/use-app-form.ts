import { InputGroupText } from '@/components/form/input-group-text'
import { InputText } from '@/components/form/input-text'
import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    InputText,
    InputGroupText,
  },
  formComponents: {},
  fieldContext,
  formContext,
})

export { useAppForm, withForm, useFieldContext, useFormContext }
