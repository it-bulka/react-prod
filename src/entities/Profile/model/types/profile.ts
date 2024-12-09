import { Country, Currency } from '@/shared/const/common'
import { ValidateProfileError } from '../const/const'

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
