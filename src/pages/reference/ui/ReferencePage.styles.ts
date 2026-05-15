import styled from 'styled-components/native'

export const ReferenceRoot = styled.View`
  flex: 1;
  gap: 18px;
`

export const SearchBox = styled.View`
  position: relative;
  height: 48px;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(245, 216, 120, 0.24);
`

export const SearchSlot = styled.View`
  position: absolute;
  left: 2px;
  z-index: 1;
`

export const SearchInput = styled.TextInput`
  height: 48px;
  padding-left: 34px;
  padding-right: 8px;
  color: #fff5cd;
  font-size: 15px;
  font-weight: 700;
`

export const ReferenceScroll = styled.ScrollView`
  flex: 1;
`

export const MapField = styled.View`
  min-height: 670px;
  overflow: hidden;
  padding: 24px 0 32px;
`

export const Star = styled.View<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size}px;
  background: rgba(255, 255, 255, 0.58);
`

export const CenterHub = styled.View`
  align-self: center;
  width: 164px;
  height: 164px;
  align-items: center;
  justify-content: center;
  border-radius: 82px;
  border-width: 1px;
  border-color: rgba(245, 216, 120, 0.48);
  background: rgba(6, 10, 13, 0.76);
  shadow-color: #f5d878;
  shadow-opacity: 0.2;
  shadow-radius: 18px;
  elevation: 4;
`

export const CenterIcon = styled.View`
  margin-bottom: 10px;
`

export const CenterTitle = styled.Text`
  color: #f5d878;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
`

export const SectionGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;
  margin-top: 28px;
`

export const NodeCard = styled.View`
  width: 47%;
  min-height: 154px;
  align-items: flex-start;
  padding: 16px 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.045);
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.07);
`

export const NodeIcon = styled.View<{ $color: string }>`
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border-radius: 27px;
  border-width: 1px;
  border-color: ${({ $color }) => $color};
  background: rgba(5, 9, 12, 0.74);
`

export const NodeTitle = styled.Text<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 7px;
`

export const NodeCopy = styled.Text`
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
`
