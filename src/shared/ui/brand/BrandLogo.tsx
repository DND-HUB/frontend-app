import { BrandMark, BrandRoot, BrandTitle, HubPart } from './BrandLogo.styles'

type BrandLogoProps = {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <BrandRoot accessibilityRole="image" accessibilityLabel="DNDHUB">
      <BrandMark>D</BrandMark>
      {!compact && (
        <BrandTitle>
          DND<HubPart>HUB</HubPart>
        </BrandTitle>
      )}
    </BrandRoot>
  )
}
