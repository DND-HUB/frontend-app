import { Menu } from 'lucide-react-native'
import { BrandLogo } from '../../../shared/ui/brand/BrandLogo'
import { HeaderRoot, MenuButton } from './MobileHeader.styles'

type MobileHeaderProps = {
  onOpenMenu: () => void
}

export function MobileHeader({ onOpenMenu }: MobileHeaderProps) {
  return (
    <HeaderRoot>
      <BrandLogo />
      <MenuButton accessibilityRole="button" accessibilityLabel="Открыть меню" onPress={onOpenMenu}>
        <Menu color="#ffffff" size={26} strokeWidth={2.1} />
      </MenuButton>
    </HeaderRoot>
  )
}
