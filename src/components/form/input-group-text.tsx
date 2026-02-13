import { forwardRef } from 'react'
import { Field, FieldLabel } from '@/components/ui/field'
import { InputGroup, InputGroupInput } from '../ui/input-group'
import { TextFieldBase } from './text-field-base'

interface InputTextProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<typeof InputGroupInput>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  addon?: React.ReactNode
  transformValue?: (value: string | number) => string | number
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
      transformValue,
    },
    ref,
  ) => (
    <TextFieldBase
      fieldProps={fieldProps}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      inputProps={inputProps}
      label={label}
      description={description}
      ref={ref}
    >
      {({ id, value, onChange, onBlur, ref: inputRef }) => (
        <InputGroup>
          <InputGroupInput
            ref={inputRef}
            id={id}
            value={transformValue ? transformValue(value) : value}
            onChange={(e) => onChange(e.currentTarget.value)}
            onBlur={onBlur}
            {...inputProps}
          />
          {addon && addon}
        </InputGroup>
      )}
    </TextFieldBase>
  ),
)

InputGroupText.displayName = 'InputGroupText'

export { InputGroupText }
