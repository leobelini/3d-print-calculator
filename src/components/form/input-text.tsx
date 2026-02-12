import { forwardRef } from 'react'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { TextFieldBase } from './text-field-base'

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
  ) => (
    <TextFieldBase
      fieldProps={fieldProps}
      labelProps={labelProps}
      inputProps={inputProps}
      descriptionProps={descriptionProps}
      label={label}
      description={description}
      ref={ref}
    >
      {({ id, value, onChange, onBlur, ref: inputRef }) => (
        <Input
          ref={inputRef}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          {...inputProps}
        />
      )}
    </TextFieldBase>
  ),
)

InputText.displayName = 'InputText'

export { InputText }
