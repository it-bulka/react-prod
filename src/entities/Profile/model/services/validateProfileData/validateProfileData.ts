import { ValidateProfileError } from '../../const/const'
import { Profile } from '../../types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if(!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const {
    first, lastname, age, country
  } = profile

  const errors = []

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
