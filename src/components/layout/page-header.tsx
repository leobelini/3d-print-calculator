import { PiPrinterBold } from 'react-icons/pi'
import { ModeToggle } from './mode-toggle'
// import { LanguageSwitch } from './language-switch'

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <PiPrinterBold className="text-2xl text-white" />
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="text-xl font-bold text-foreground">3D Print</h1>
            <span className="text-xs text-muted-foreground">
              Cost Calculator
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* <LanguageSwitch /> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
