import type { ComponentType } from 'react'
import { BookOpen, Dice5, Globe2, Search, Sparkles, Swords, UserRound } from 'lucide-react-native'
import {
  CenterHub,
  CenterIcon,
  CenterTitle,
  MapField,
  NodeCard,
  NodeCopy,
  NodeIcon,
  NodeTitle,
  ReferenceScroll,
  ReferenceRoot,
  SearchBox,
  SearchInput,
  SearchSlot,
  SectionGrid,
  Star,
} from './ReferencePage.styles'

type ReferenceNode = {
  id: string
  title: string
  lines: string[]
  color: string
  icon: ComponentType<{ color?: string; size?: number; strokeWidth?: number }>
}

const nodes: ReferenceNode[] = [
  {
    id: 'character',
    title: 'Персонаж',
    lines: ['Классы · Расы', 'Черты · Предыстории'],
    color: '#9ce898',
    icon: UserRound,
  },
  {
    id: 'combat',
    title: 'Бой',
    lines: ['Оружие · Доспехи', 'Состояния · Правила'],
    color: '#ff8f86',
    icon: Swords,
  },
  {
    id: 'magic',
    title: 'Магия',
    lines: ['Заклинания', 'Магические предметы'],
    color: '#e49bff',
    icon: Sparkles,
  },
  {
    id: 'master',
    title: 'Мастеру',
    lines: ['Лут · Таблицы', 'Подбор врагов'],
    color: '#f5d878',
    icon: Dice5,
  },
  {
    id: 'world',
    title: 'Мир',
    lines: ['Бестиарий · Локации', 'Организации · Языки'],
    color: '#aee3ff',
    icon: Globe2,
  },
]

const stars = [
  { x: 32, y: 30, size: 2 },
  { x: 84, y: 76, size: 2 },
  { x: 144, y: 18, size: 1 },
  { x: 240, y: 54, size: 2 },
  { x: 306, y: 112, size: 1 },
  { x: 58, y: 210, size: 1 },
  { x: 286, y: 260, size: 2 },
]

export function ReferencePage() {
  return (
    <ReferenceRoot>
      <SearchBox>
        <SearchSlot>
          <Search color="rgba(245,216,120,0.72)" size={19} strokeWidth={2.2} />
        </SearchSlot>
        <SearchInput accessibilityLabel="Поиск по справочнику" placeholder="Поиск по справочнику" placeholderTextColor="rgba(255,255,255,0.34)" />
      </SearchBox>

      <ReferenceScroll showsVerticalScrollIndicator={false}>
        <MapField accessibilityRole="summary" accessibilityLabel="Карта разделов справочника">
          {stars.map((star) => (
            <Star key={`${star.x}-${star.y}`} $size={star.size} style={{ left: star.x, top: star.y }} />
          ))}

          <CenterHub>
            <CenterIcon>
              <BookOpen color="#fff0c2" size={38} strokeWidth={1.8} />
            </CenterIcon>
            <CenterTitle>Справочник</CenterTitle>
          </CenterHub>

          <SectionGrid>
            {nodes.map((node) => {
              const Icon = node.icon

              return (
                <NodeCard key={node.id}>
                  <NodeIcon $color={node.color}>
                    <Icon color={node.color} size={28} strokeWidth={1.9} />
                  </NodeIcon>
                  <NodeTitle $color={node.color}>{node.title}</NodeTitle>
                  <NodeCopy>{node.lines[0]}</NodeCopy>
                  <NodeCopy>{node.lines[1]}</NodeCopy>
                </NodeCard>
              )
            })}
          </SectionGrid>
        </MapField>
      </ReferenceScroll>
    </ReferenceRoot>
  )
}
