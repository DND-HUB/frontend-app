import { useMemo, useState } from 'react'
import { AppLayout } from './layouts/AppLayout'
import { mobileRoutes, type MobileRouteId } from './navigation/routes'
import { PlaceholderPage } from '../pages/placeholder/ui/PlaceholderPage'
import { ReferencePage } from '../pages/reference/ui/ReferencePage'

export function App() {
  const [activeRouteId, setActiveRouteId] = useState<MobileRouteId>('reference')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeRoute = useMemo(
    () => mobileRoutes.find((route) => route.id === activeRouteId) ?? mobileRoutes[1],
    [activeRouteId],
  )

  const handleNavigate = (routeId: MobileRouteId) => {
    setActiveRouteId(routeId)
    setIsMenuOpen(false)
  }

  return (
    <AppLayout
      activeRouteId={activeRouteId}
      isMenuOpen={isMenuOpen}
      routes={mobileRoutes}
      onCloseMenu={() => setIsMenuOpen(false)}
      onNavigate={handleNavigate}
      onOpenMenu={() => setIsMenuOpen(true)}
    >
      {activeRouteId === 'reference' ? <ReferencePage /> : <PlaceholderPage title={activeRoute.title} />}
    </AppLayout>
  )
}
