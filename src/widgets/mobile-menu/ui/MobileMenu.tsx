import { X } from 'lucide-react-native'
import type { MobileRoute, MobileRouteId } from '../../../application/navigation/routes'
import { BrandLogo } from '../../../shared/ui/brand/BrandLogo'
import {
  CloseButton,
  DisabledBadge,
  DrawerHeader,
  DrawerPanel,
  DrawerTitle,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuOverlay,
  MenuRoot,
} from './MobileMenu.styles'

type MobileMenuProps = {
  activeRouteId: MobileRouteId
  isOpen: boolean
  routes: MobileRoute[]
  onClose: () => void
  onNavigate: (routeId: MobileRouteId) => void
}

export function MobileMenu({ activeRouteId, isOpen, routes, onClose, onNavigate }: MobileMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <MenuRoot>
      <MenuOverlay accessibilityRole="button" accessibilityLabel="Закрыть меню" onPress={onClose} />
      <DrawerPanel>
        <DrawerHeader>
          <BrandLogo compact />
          <DrawerTitle>Навигация</DrawerTitle>
          <CloseButton accessibilityRole="button" accessibilityLabel="Закрыть меню" onPress={onClose}>
            <X color="#ffffff" size={22} strokeWidth={2} />
          </CloseButton>
        </DrawerHeader>

        {routes.map((route) => {
          const Icon = route.icon
          const isActive = activeRouteId === route.id
          const color = route.disabled ? 'rgba(255,255,255,0.34)' : isActive ? '#f5d878' : '#ffffff'

          return (
            <MenuItem
              key={route.id}
              accessibilityRole="button"
              accessibilityState={{ disabled: route.disabled, selected: isActive }}
              disabled={route.disabled}
              onPress={() => {
                if (!route.disabled) {
                  onNavigate(route.id)
                }
              }}
            >
              <MenuItemIcon $active={isActive} $disabled={Boolean(route.disabled)}>
                <Icon color={color} size={20} strokeWidth={2} />
              </MenuItemIcon>
              <MenuItemText $active={isActive} $disabled={Boolean(route.disabled)}>
                {route.title}
              </MenuItemText>
              {route.disabled && <DisabledBadge>Скоро</DisabledBadge>}
            </MenuItem>
          )
        })}
      </DrawerPanel>
    </MenuRoot>
  )
}
