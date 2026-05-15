import styled from 'styled-components/native'

export const MenuRoot = styled.View`
  position: absolute;
  inset: 0;
  z-index: 10;
`

export const MenuOverlay = styled.Pressable`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.48);
`

export const DrawerPanel = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 82%;
  max-width: 340px;
  padding: 22px 18px;
  background: #111923;
  border-left-width: 1px;
  border-left-color: rgba(245, 216, 120, 0.16);
`

export const DrawerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
`

export const DrawerTitle = styled.Text`
  flex: 1;
  color: rgba(255, 255, 255, 0.72);
  font-size: 15px;
  font-weight: 800;
`

export const CloseButton = styled.Pressable`
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
`

export const MenuItem = styled.Pressable`
  min-height: 52px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.06);
`

export const MenuItemIcon = styled.View<{ $active: boolean; $disabled: boolean }>`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${({ $active, $disabled }) =>
    $disabled ? 'rgba(255,255,255,0.03)' : $active ? 'rgba(245,216,120,0.12)' : 'rgba(255,255,255,0.04)'};
`

export const MenuItemText = styled.Text<{ $active: boolean; $disabled: boolean }>`
  flex: 1;
  color: ${({ $active, $disabled }) =>
    $disabled ? 'rgba(255,255,255,0.34)' : $active ? '#f5d878' : 'rgba(255,255,255,0.86)'};
  font-size: 16px;
  font-weight: 800;
`

export const DisabledBadge = styled.Text`
  color: rgba(255, 255, 255, 0.38);
  font-size: 12px;
  font-weight: 800;
`
