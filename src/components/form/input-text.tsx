import { forwardRef } from 'react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useFieldContext } from '@/hooks/use-app-form'

interface InputTextProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<typeof Input>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      fieldProps,
      labelProps,
      inputProps,
      descriptionProps,
      label,
      description,
    },
    ref,
  ) => {
    const field = useFieldContext<string>()

    return (
      <Field {...fieldProps}>
        {label && (
          <FieldLabel htmlFor={field.name} {...labelProps}>
            {label}
          </FieldLabel>
        )}
        <Input
          ref={ref}
          id={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          {...inputProps}
        />
        {description && (
          <FieldDescription {...descriptionProps}>
            {description}
          </FieldDescription>
        )}
      </Field>
    )
  },
)

InputText.displayName = 'InputText'

export { InputText }
