import type {
  ProjectTypeEnergy,
  ProjectTypeFilament,
  ProjectTypePrint,
  ProjectTypePrinterDepreciation,
  ProjectTypeProfit,
} from '../project'

export interface FormProjectType {
  printerDepreciation: ProjectTypePrinterDepreciation
  filament: ProjectTypeFilament
  energy: ProjectTypeEnergy
  print: ProjectTypePrint
  profit: ProjectTypeProfit
}
