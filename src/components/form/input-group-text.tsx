import { forwardRef } from 'react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useFieldContext } from '@/hooks/use-app-form'
import { InputGroup, InputGroupInput } from '../ui/input-group'

interface InputTextProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<typeof Input>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  addon?: React.ReactNode
}

const InputGroupText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      fieldProps,
      labelProps,
      inputProps,
      descriptionProps,
      label,
      description,
      addon,
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
        <InputGroup>
          <InputGroupInput
            ref={ref}
            id={field.name}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            {...inputProps}
          />
          {addon && addon}
        </InputGroup>
        {description && (
          <FieldDescription {...descriptionProps}>
            {description}
          </FieldDescription>
        )}
      </Field>
    )
  },
)

InputGroupText.displayName = 'InputGroupText'

export { InputGroupText }
