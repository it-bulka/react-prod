import classnames from 'shared/libs/classnames/classnames'

describe('classnames', () => {
  it('should work with only one params', () => {
    expect(classnames('someClass')).toBe('someClass')
  })

  it('should show all classes with Mods true', () => {
    const expected = 'someClass mod1 mod2'
    expect(classnames('someClass', { 'mod1': true, 'mod2': true })).toBe(expected)
  })

  it('should not show classes with with Mods false', () => {
    const expected = 'someClass mod2'
    expect(classnames('someClass', { 'mod1': false, 'mod2': true })).toBe(expected)
  })

  it('should show all classes with all params', () => {
    const expected = 'someClass mod1 mod2 additional'
    expect(classnames('someClass', { 'mod1': true, 'mod2': true }, ['additional'])).toBe(expected)
  })
})
