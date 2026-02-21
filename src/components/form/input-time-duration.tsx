import { forwardRef } from 'react'
import { Field, FieldLabel } from '@/components/ui/field'
import { TextFieldBase } from './text-field-base'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'

interface InputTimeDurationProps {
  fieldProps?: React.ComponentProps<typeof Field>
  labelProps?: React.ComponentProps<typeof FieldLabel>
  inputProps?: React.ComponentProps<'input'>
  descriptionProps?: React.ComponentProps<'p'>
  label?: string | React.ReactNode
  description?: string | React.ReactNode
}

const InputTimeDuration = forwardRef<HTMLInputElement, InputTimeDurationProps>(
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
    // Formata dígitos como tempo (preenchendo da direita para esquerda)
    // 1-2 dígitos: apenas minutos (sem ":")
    // 3+ dígitos: H:MM, HH:MM ou HHH:MM (máximo 999:59)
    const formatTime = (digits: string): string => {
      if (!digits) return ''

      digits = digits.slice(0, 5)

      if (digits.length <= 2) {
        return digits
      }

      const minutes = digits.slice(-2)
      const hours = digits.slice(0, -2)
      return `${parseInt(hours, 10)}:${minutes}`
    }

    const handleInputChange = (
      onChange: (value: string) => void,
      inputRef: HTMLInputElement | null,
    ) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/\D/g, '').slice(0, 5)
        const formatted = formatTime(digits)
        onChange(formatted)

        if (inputRef) {
          setTimeout(() => {
            inputRef.setSelectionRange(formatted.length, formatted.length)
          }, 0)
        }
      }
    }

    const handleKeyDown = () => {
      return (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = [
          'Backspace',
          'Delete',
          'ArrowLeft',
          'ArrowRight',
          'Tab',
          'Home',
          'End',
        ]

        if (allowedKeys.includes(e.key) || e.metaKey || e.ctrlKey || e.altKey) {
          return
        }
        if (!/^\d$/.test(e.key)) {
          e.preventDefault()
        }
      }
    }

    // No blur, valida que os minutos não excedem 59
    const handleBlur = (
      currentValue: string,
      onChange: (value: string) => void,
      onBlur: () => void,
    ) => {
      return () => {
        const digits = currentValue.replace(/\D/g, '')

        if (digits.length >= 2) {
          const lastTwo = parseInt(digits.slice(-2), 10)

          if (lastTwo > 59) {
            const hoursPart = digits.slice(0, -2)
            const capped = (hoursPart || '') + '59'
            onChange(formatTime(capped))
          }
        }

        onBlur()
      }
    }

    return (
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
            type="text"
            inputMode="numeric"
            value={String(value)}
            onChange={handleInputChange(
              onChange,
              inputRef && 'current' in inputRef ? inputRef.current : null,
            )}
            onKeyDown={handleKeyDown()}
            onBlur={handleBlur(String(value), onChange, onBlur)}
            placeholder="0:00"
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              inputProps?.className,
            )}
            {...inputProps}
          />
        )}
      </TextFieldBase>
    )
  },
)

InputTimeDuration.displayName = 'InputTimeDuration'

export { InputTimeDuration }
