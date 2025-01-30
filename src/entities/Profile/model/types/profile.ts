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

export interface ProfileCardProps {
  className?: string
  data?: Profile
  readOnly?: boolean
  error?: string
  isLoading?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}
