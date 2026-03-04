export interface ProjectTypePrinterDepreciation {
  printerPrice: number // Preço da impressora R$ (Printer Price)
  printerLifetimeHours: number // Vida útil da impressora em horas (Printer Lifetime Hours)
  printerPowerConsumption: number // Consumo de energia da impressora em watts (Printer Power Consumption)
}

export interface ProjectTypeFilament {
  filamentCostPerKg: number // Custo do filamento por kg R$ (Filament Cost per Kg)
}

export interface ProjectTypeEnergy {
  electricityCostPerKwh: number // Custo da eletricidade por kWh R$ (Electricity Cost per kWh)
}

export interface ProjectTypePrint {
  filamentUsedGrams: number // Quantidade de filamento usado em gramas (Filament Used Grams)
  printDurationHours: string // Duração da impressão em horas (Print Duration Hours)
  failureRatePercent: number // Taxa de falha em porcentagem (Failure Rate Percentage)
}

export interface ProjectTypeProfit {
  profitMarginPercent: number // Margem de lucro em porcentagem (Profit Margin Percentage)
}

