import { PiPrinterBold } from 'react-icons/pi'
import { ModeToggle } from './mode-toggle'
// import { LanguageSwitch } from './language-switch'

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-blue-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950 backdrop-blur supports-[backdrop-filter]:bg-opacity-95 shadow-sm dark:shadow-lg dark:shadow-blue-900/20">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
            <PiPrinterBold className="text-2xl text-white" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3D Print
            </h1>
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Cost Calculator
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* <LanguageSwitch /> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
