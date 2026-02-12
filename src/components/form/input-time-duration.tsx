import { forwardRef } from 'react'
import { Field, FieldLabel } from '@/components/ui/field'
import { TextFieldBase } from './text-field-base'
import { cn } from '@/lib/utils'

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
    const formatTime = (digits: string): string => {
      if (!digits) return ''

      // Preenche com zeros à esquerda se necessário
      const padded = digits.padStart(3, '0')

      // Separa horas e minutos (últimos 2 dígitos são minutos)
      const minutes = padded.slice(-2)
      const hoursStr = padded.slice(0, -2)

      // Remove zeros à esquerda das horas
      const hours = parseInt(hoursStr, 10).toString()

      return `${hours}:${minutes}`
    }

    const handleInputChange = (
      _currentValue: string,
      onChange: (value: string) => void,
    ) => {
      return (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value

        // Remove tudo que não é dígito
        let digits = input.replace(/\D/g, '')

        // Limita a um número razoável de dígitos (ex: 5 dígitos = 999:59)
        digits = digits.slice(0, 5)

        // Valida os minutos (últimos 2 dígitos)
        if (digits.length >= 2) {
          const minutes = parseInt(digits.slice(-2), 10)
          if (minutes > 59) {
            // Se os minutos forem > 59, não atualiza
            return
          }
        }

        // Formata e atualiza
        const formatted = formatTime(digits)
        onChange(formatted)
      }
    }

    const handleKeyDown = (_currentValue: string) => {
      return (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Permite navegação e comandos de edição
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

        // Permite apenas dígitos
        if (!/^\d$/.test(e.key)) {
          e.preventDefault()
        }
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
          <input
            ref={inputRef}
            id={id}
            type="text"
            value={String(value)}
            onChange={handleInputChange(String(value), onChange)}
            onKeyDown={handleKeyDown(String(value))}
            onBlur={onBlur}
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
