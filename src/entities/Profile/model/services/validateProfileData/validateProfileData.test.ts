import { Currency, Country } from 'shared/const/common'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../const/const'

const data = {
  'first': 'Iv',
  'lastname': 'G',
  'age': 29,
  'currency': Currency.UAH,
  'country': Country.Ukraine,
  'city': 'Kyiv',
  'username': 'admin',
  'avatar': 'https://static.vecteezy.com/system/resources/previews/020/437/389/non_2x/admin-icon-vector.jpg'
}

type PartialData = Partial<typeof data>

describe('validateProfileData', () => {
  it('should work successfully', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  it('should return error ValidateProfileError.NO_DATA if no profile', async () => {
    const result = validateProfileData()
    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })

  it(
    'should return error ValidateProfileError.INCORRECT_USER_DATA if no just first name',
    async () => {
      const value: PartialData = {...data}
      delete value.first
      const result = validateProfileData(value)
      expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  }
)

  it(
    'should return error ValidateProfileError.INCORRECT_USER_DATA if no just last name',
    async () => {
      const value: PartialData = {...data}
      delete value.lastname
      const result = validateProfileData(value)
      expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    }
)

  it(
    'should return error ValidateProfileError.INCORRECT_USER_DATA if no just age or age is not number',
    async () => {
      const value: PartialData = {...data}
      delete value.age
      const result = validateProfileData(value)
      expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    }
)

  it(
    'should return error ValidateProfileError.INCORRECT_COUNTRY if no just country',
    async () => {
      const value: PartialData = {...data}
      delete value.country
      const result = validateProfileData(value)
      expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    }
)

  it(
    'should return several errors if no several properties',
    async () => {
      const value: PartialData = {...data}
      delete value.lastname
      delete value.age
      delete value.country

      const result = validateProfileData(value)
      expect(result).toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY
      ])
    }
)
})
