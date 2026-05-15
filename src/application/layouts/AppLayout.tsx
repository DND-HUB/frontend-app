import { StatusBar } from 'expo-status-bar'
import type { ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import type { MobileRoute, MobileRouteId } from '../navigation/routes'
import { MobileHeader } from '../../widgets/mobile-header/ui/MobileHeader'
import { MobileMenu } from '../../widgets/mobile-menu/ui/MobileMenu'
import { AppContent, AppSafeArea, AppShell } from './AppLayout.styles'

type AppLayoutProps = {
  activeRouteId: MobileRouteId
  children: ReactNode
  isMenuOpen: boolean
  routes: MobileRoute[]
  onCloseMenu: () => void
  onNavigate: (routeId: MobileRouteId) => void
  onOpenMenu: () => void
}

const initialSafeAreaMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 0, right: 0, bottom: 0, left: 0 },
}

export function AppLayout({
  activeRouteId,
  children,
  isMenuOpen,
  routes,
  onCloseMenu,
  onNavigate,
  onOpenMenu,
}: AppLayoutProps) {
  return (
    <SafeAreaProvider initialMetrics={initialSafeAreaMetrics}>
      <AppShell>
        <StatusBar style="light" />
        <AppSafeArea>
          <AppContent>
            <MobileHeader onOpenMenu={onOpenMenu} />
            {children}
          </AppContent>
          <MobileMenu
            activeRouteId={activeRouteId}
            isOpen={isMenuOpen}
            routes={routes}
            onClose={onCloseMenu}
            onNavigate={onNavigate}
          />
        </AppSafeArea>
      </AppShell>
    </SafeAreaProvider>
  )
}
