import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('calls callback once with latest arguments', () => {
    const callback = jest.fn()
    const debounced = debounce(callback, 250)

    debounced('a')
    debounced('b')

    jest.advanceTimersByTime(250)

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('b')
  })

  it('cancels pending callback', () => {
    const callback = jest.fn()
    const debounced = debounce(callback, 250)

    debounced('a')
    debounced.cancel()
    jest.advanceTimersByTime(250)

    expect(callback).not.toHaveBeenCalled()
  })
})
