import type { ComponentType } from 'react'
import { BookOpen, CircleHelp, Play, ShoppingBag, Sparkles, Trophy, UserRound, Wrench } from 'lucide-react-native'

export type MobileRouteId = 'quick-start' | 'reference' | 'tools' | 'room' | 'shop' | 'ratings' | 'about' | 'profile'

export type MobileRoute = {
  id: MobileRouteId
  title: string
  disabled?: boolean
  icon: ComponentType<{ color?: string; size?: number; strokeWidth?: number }>
}

export const mobileRoutes: MobileRoute[] = [
  { id: 'quick-start', title: 'Быстрый старт', icon: Play },
  { id: 'reference', title: 'Справочник', icon: BookOpen },
  { id: 'tools', title: 'Инструменты', icon: Wrench, disabled: true },
  { id: 'room', title: 'Создать комнату', icon: Sparkles, disabled: true },
  { id: 'shop', title: 'Магазин', icon: ShoppingBag, disabled: true },
  { id: 'ratings', title: 'Рейтинги', icon: Trophy },
  { id: 'about', title: 'О нас', icon: CircleHelp },
  { id: 'profile', title: 'Профиль', icon: UserRound },
]
