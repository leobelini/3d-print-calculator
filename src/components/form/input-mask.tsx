import { forwardRef } from 'react'
import { InputMask as ReactInputMask } from '@react-input/mask'
import { Field, FieldLabel } from '@/components/ui/field'
import { TextFieldBase } from './text-field-base'
import { cn } from '@/lib/utils'

interface InputMaskProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<'input'>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  mask?: string
  replacement?: Record<string, RegExp>
  showMask?: boolean
  separate?: boolean
}

const InputMaskComponent = forwardRef<HTMLInputElement, InputMaskProps>(
  (
    {
      fieldProps,
      labelProps,
      inputProps,
      descriptionProps,
      label,
      description,
      mask = '',
      replacement,
      showMask = false,
      separate = false,
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
        <ReactInputMask
          ref={inputRef}
          id={id}
          mask={mask}
          replacement={replacement}
          showMask={showMask}
          separate={separate}
          value={String(value)}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            inputProps?.className,
          )}
          {...inputProps}
        />
      )}
    </TextFieldBase>
  ),
)

InputMaskComponent.displayName = 'InputMask'

export { InputMaskComponent as InputMask }
