import type { FormProjectType } from '@/types/forms/project'

export const defaultFormValues: FormProjectType = {
  printerDepreciation: {
    printerPrice: 0,
    printerLifetimeHours: 0,
    printerPowerConsumption: 0.2,
  },
  filament: {
    filamentCostPerKg: 0,
  },
  energy: {
    electricityCostPerKwh: 0,
  },
  print: {
    filamentUsedGrams: 0,
    printDurationHours: '',
    failureRatePercent: 10,
  },
  profit: {
    profitMarginPercent: 30,
  },
}
