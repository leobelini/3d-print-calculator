export const normalizeNumericValue = (value: string | number) => {
  if (!value) return value
  const parsed = parseFloat(value.toString().replace(/[^0-9.-]+/g, ''))
  return !isNaN(parsed) ? parsed.toString() : value
}

// Converte H:MM para horas decimais (ex: "1:30" -> 1.5)
export const convertTimeToHours = (time: string | number): number => {
  if (typeof time === 'number') return time
  if (!time || typeof time !== 'string') return 0

  const parts = time.split(':')
  if (parts.length !== 2) return 0

  const hours = parseInt(parts[0], 10) || 0
  const minutes = parseInt(parts[1], 10) || 0

  return hours + minutes / 60
}
