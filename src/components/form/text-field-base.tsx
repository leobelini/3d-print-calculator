import { forwardRef } from 'react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { useFieldContext } from '@/hooks/use-app-form'
import type { Input } from '../ui/input'

interface TextFieldBaseProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<typeof Input>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode

  children: (args: {
    id: string
    value: string | number
    onChange: (value: string | number) => void
    onBlur: () => void
    ref: React.Ref<HTMLInputElement>
  }) => React.ReactNode
}

const TextFieldBase = forwardRef<HTMLInputElement, TextFieldBaseProps>(
  (
    {
      fieldProps,
      labelProps,
      descriptionProps,
      label,
      description,
      inputProps,
      children,
    },
    ref,
  ) => {
    const field = useFieldContext<string | number>()

    return (
      <Field {...fieldProps}>
        {label && (
          <FieldLabel htmlFor={field.name} {...labelProps}>
            {label}
          </FieldLabel>
        )}
        {children({
          id: field.name,
          value: field.state.value,
          onChange: (value: string | number) => {
            if (inputProps?.type === 'number') {
              const parsedValue = parseFloat(value as string)
              field.handleChange(isNaN(parsedValue) ? '' : parsedValue)
            } else {
              field.handleChange(value)
            }
          },
          onBlur: field.handleBlur,
          ref,
        })}
        {description && (
          <FieldDescription {...descriptionProps}>
            {description}
          </FieldDescription>
        )}
      </Field>
    )
  },
)

TextFieldBase.displayName = 'TextFieldBase'

export { TextFieldBase }
