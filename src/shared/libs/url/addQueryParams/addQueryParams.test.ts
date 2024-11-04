import { getQueryParams } from './addQueryParams'

describe('getQueryParams', () => {
  it('should returns query params', () => {
    expect(getQueryParams({key: 'value'})).toBe('?key=value')
  })

  it('should work with multiple params', () => {
    expect(getQueryParams({key: 'value', key2: 'value'})).toBe('?key=value&key2=value')
  })

  it('should omit params with undefined', () => {
    expect(getQueryParams({key: 'value', key2: undefined})).toBe('?key=value')
  })
})
