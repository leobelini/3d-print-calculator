import { useI18n } from '@/paraglide/runtime'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MdLanguage } from 'react-icons/md'

const languages = [
  { code: 'en', label: '🇺🇸 English' },
  { code: 'de', label: '🇩🇪 Deutsch' },
]

export function LanguageSwitch() {
  const i18n = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MdLanguage className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.setLanguageTag(lang.code as 'en' | 'de')}
            className={i18n.languageTag() === lang.code ? 'bg-accent' : ''}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
