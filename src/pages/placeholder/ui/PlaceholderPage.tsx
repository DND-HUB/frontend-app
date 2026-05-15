import { PlaceholderLead, PlaceholderRoot, PlaceholderTitle } from './PlaceholderPage.styles'

type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <PlaceholderRoot>
      <PlaceholderTitle>{title}</PlaceholderTitle>
      <PlaceholderLead>Раздел готовится.</PlaceholderLead>
    </PlaceholderRoot>
  )
}
