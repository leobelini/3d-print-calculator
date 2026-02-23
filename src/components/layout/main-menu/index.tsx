import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export function MainMenu() {
  return (
    <NavigationMenu className="w-full max-w-full justify-start flex-none mx-3">
      <NavigationMenuList className="h-12">
        <NavigationMenuItem>
          <NavigationMenuLink to="/">Calculadora</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
