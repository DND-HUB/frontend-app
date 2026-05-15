import { render, screen } from '@testing-library/react-native'
import { fireEvent } from '@testing-library/react-native'
import { App } from './App'

describe('Mobile App', () => {
  it('renders mobile header and reference page', () => {
    render(<App />)

    expect(screen.getByText('DNDHUB')).toBeTruthy()
    expect(screen.getByLabelText('Открыть меню')).toBeTruthy()
    expect(screen.getByLabelText('Поиск по справочнику')).toBeTruthy()
    expect(screen.getByText('Персонаж')).toBeTruthy()
    expect(screen.getByText('Бой')).toBeTruthy()
    expect(screen.getByText('Магия')).toBeTruthy()
  })

  it('opens burger menu with routes and disabled items', () => {
    render(<App />)

    fireEvent.press(screen.getByLabelText('Открыть меню'))

    expect(screen.getByText('Навигация')).toBeTruthy()
    expect(screen.getByText('Быстрый старт')).toBeTruthy()
    expect(screen.getAllByText('Справочник').length).toBeGreaterThan(1)
    expect(screen.getByText('Инструменты')).toBeTruthy()
    expect(screen.getByText('Создать комнату')).toBeTruthy()
    expect(screen.getAllByText('Скоро')).toHaveLength(3)
  })

  it('navigates from burger menu to available page', () => {
    render(<App />)

    fireEvent.press(screen.getByLabelText('Открыть меню'))
    fireEvent.press(screen.getByText('О нас'))

    expect(screen.queryByText('Навигация')).toBeNull()
    expect(screen.getByText('О нас')).toBeTruthy()
    expect(screen.getByText('Раздел готовится.')).toBeTruthy()
  })
})
