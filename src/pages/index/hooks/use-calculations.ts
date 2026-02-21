import { useMemo } from 'react'
import { convertTimeToHours } from '@/lib/transform-values'
import type { FormType } from '../types'

export interface CalculationResults {
  depreciationPerHour: number
  depreciationCost: number
  filamentCost: number
  filamentLossCost: number
  filamentCostWithFailure: number
  energyCost: number
  totalCost: number
  profitValue: number
  salePrice: number
}

export function useCalculations(values: FormType): CalculationResults {
  return useMemo(() => {
    const { energy, filament, print, printerDepreciation, profit } = values
    const printDurationInHours = convertTimeToHours(print.printDurationHours)
    const depreciationPerHour =
      printerDepreciation.printerPrice /
      (printerDepreciation.printerLifetimeHours || 1)
    const depreciationCost = depreciationPerHour * printDurationInHours

    const filamentUsedKg = print.filamentUsedGrams / 1000
    const filamentCost = filamentUsedKg * filament.filamentCostPerKg

    const failureRate = print.failureRatePercent / 100
    const filamentLossCost = filamentCost * failureRate
    const filamentCostWithFailure = filamentCost + filamentLossCost

    const powerInKw = printerDepreciation.printerPowerConsumption
    const energyConsumed = powerInKw * printDurationInHours
    const energyCost = energyConsumed * energy.electricityCostPerKwh

    const totalCost = depreciationCost + filamentCostWithFailure + energyCost
    const salePrice = totalCost * (1 + profit.profitMarginPercent / 100)
    const profitValue = salePrice - totalCost

    return {
      depreciationPerHour,
      depreciationCost,
      filamentCost,
      filamentLossCost,
      filamentCostWithFailure,
      energyCost,
      totalCost,
      profitValue,
      salePrice,
    }
  }, [values])
}
