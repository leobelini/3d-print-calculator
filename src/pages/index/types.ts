export interface FormType {
  printerPrice: number // Preço da impressora R$ (Printer Price)
  printerLifetimeHours: number // Vida útil da impressora em horas (Printer Lifetime Hours)
  filamentCostPerKg: number // Custo do filamento por kg R$ (Filament Cost per Kg)
  filamentUsedGrams: number // Quantidade de filamento usado em gramas (Filament Used Grams)
  electricityCostPerKwh: number // Custo da eletricidade por kWh R$ (Electricity Cost per kWh)
  printerPowerConsumption: number // Consumo de energia da impressora em watts (Printer Power Consumption)
  printDurationHours: string // Duração da impressão em horas (Print Duration Hours)
  failureRatePercent: number // Taxa de falha em porcentagem (Failure Rate Percentage)
  profitMarginPercent: number // Margem de lucro em porcentagem (Profit Margin Percentage)
}

export const defaultFormValues: FormType = {
  printerPrice: 0,
  printerLifetimeHours: 0,
  filamentCostPerKg: 0,
  filamentUsedGrams: 0,
  electricityCostPerKwh: 0,
  printerPowerConsumption: 0.2,
  printDurationHours: '',
  failureRatePercent: 10,
  profitMarginPercent: 30,
}
