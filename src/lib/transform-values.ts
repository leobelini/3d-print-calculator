export const normalizeNumericValue = (value: string | number) => {
  if (!value) return value
  const parsed = parseFloat(value.toString().replace(/[^0-9.-]+/g, ''))
  return !isNaN(parsed) ? parsed.toString() : value
}

// Converte H:MM para horas decimais (ex: "1:30" -> 1.5)
// Também aceita valores sem ":" que representam apenas minutos (ex: "30" -> 0.5)
export const convertTimeToHours = (time: string | number): number => {
  if (typeof time === 'number') return time
  if (!time || typeof time !== 'string') return 0

  const parts = time.split(':')

  if (parts.length === 1) {
    // Sem ":" — valor representa apenas minutos
    const minutes = parseInt(parts[0], 10) || 0
    return minutes / 60
  }

  if (parts.length !== 2) return 0

  const hours = parseInt(parts[0], 10) || 0
  const minutes = parseInt(parts[1], 10) || 0

  return hours + minutes / 60
}

export const formatCurrency = (value: number): string => {
  if (isNaN(value) || value === null || value === undefined || value === 0) {
    return ''
  }
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
