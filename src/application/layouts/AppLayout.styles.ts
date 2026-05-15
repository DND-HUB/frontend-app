import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const AppShell = styled.View`
  flex: 1;
  background: #101721;
`

export const AppSafeArea = styled(SafeAreaView)`
  flex: 1;
`

export const AppContent = styled.View`
  flex: 1;
  padding: 20px;
  gap: 22px;
`
