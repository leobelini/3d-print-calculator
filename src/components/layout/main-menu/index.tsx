import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

export function MainMenu() {
  return (
    <NavigationMenu className="w-full max-w-full justify-start flex-none">
      <NavigationMenuList className="h-12">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">
              {({ isActive }) => (
                <span
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive && 'bg-accent text-accent-foreground font-bold',
                  )}
                >
                  Calculadora
                </span>
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
