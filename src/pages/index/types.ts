export interface FormType {
  printerDepreciation: {
    printerPrice: number // Preço da impressora R$ (Printer Price)
    printerLifetimeHours: number // Vida útil da impressora em horas (Printer Lifetime Hours)
    printerPowerConsumption: number // Consumo de energia da impressora em watts (Printer Power Consumption)
  }
  filament: {
    filamentCostPerKg: number // Custo do filamento por kg R$ (Filament Cost per Kg)
  }
  energy: {
    electricityCostPerKwh: number // Custo da eletricidade por kWh R$ (Electricity Cost per kWh)
  }
  print: {
    filamentUsedGrams: number // Quantidade de filamento usado em gramas (Filament Used Grams)
    printDurationHours: string // Duração da impressão em horas (Print Duration Hours)
    failureRatePercent: number // Taxa de falha em porcentagem (Failure Rate Percentage)
  }
  profit: {
    profitMarginPercent: number // Margem de lucro em porcentagem (Profit Margin Percentage)
  }
}

export const defaultFormValues: FormType = {
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
