import { EnergyForm } from './energy'
import { FilamentForm } from './filament'
import { PrintForm } from './print'
import { PrinterDepreciationForm } from './printer-depreciation'
import { ProfitForm } from './profit'

const FormSession = {
  Energy: EnergyForm,
  Filament: FilamentForm,
  Print: PrintForm,
  PrinterDepreciation: PrinterDepreciationForm,
  Profit: ProfitForm,
}

export { FormSession }
