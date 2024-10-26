import { Country, Currency } from 'shared/const/common'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'incorrect_user_data',
  INCORRECT_AGE = 'incorrect_age',
  INCORRECT_COUNTRY = 'incorrect_country',
  NO_DATA = 'no_data',
  SERVER_ERROR = 'server_error',
}

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  // from server
  data?: Profile
  // on user side
  form?: Profile
  isLoading: boolean
  error?: string
  readOnly: boolean
  validateErrors?: ValidateProfileError[]
}
