import { HomeCard, HomeLead, HomePageRoot, HomeTitle, PlatformText } from './HomePage.styles'

export function HomePage() {
  return (
    <HomePageRoot>
      <HomeCard>
        <HomeTitle>DNDHUB</HomeTitle>
        <HomeLead>Мобильный фронт для iOS и Android</HomeLead>
        <PlatformText>React Native + Expo + TypeScript</PlatformText>
      </HomeCard>
    </HomePageRoot>
  )
}
