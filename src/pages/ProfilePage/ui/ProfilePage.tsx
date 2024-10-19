import { useCallback, useEffect } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import {
  profileReducer,
  profileActions,
  getProfileReadonly,
  getProfileValidateErrors,
  getProfileError,
  getProfileFormData,
  fetchProfileData,
  ProfileCard
} from 'entities/Profile'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Country, Currency } from 'shared/const/common'
import { useTranslation } from 'react-i18next'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { Text, TextTheme } from 'shared/ui'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation('profile')

  const formData = useSelector(getProfileFormData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)
  const readOnly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

  const validatedErrTranslation = {
    [ValidateProfileError.SERVER_ERROR]: t(ValidateProfileError.SERVER_ERROR),
    [ValidateProfileError.INCORRECT_COUNTRY]: t(ValidateProfileError.INCORRECT_COUNTRY),
    [ValidateProfileError.NO_DATA]: t(ValidateProfileError.NO_DATA),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(ValidateProfileError.INCORRECT_USER_DATA),
    [ValidateProfileError.INCORRECT_AGE]: t(ValidateProfileError.INCORRECT_AGE)
  }

  useEffect(() => {
    if(__PROJECT_ENV__ === 'storybook') return
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    if(__PROJECT_ENV__ === 'storybook') return
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={reducers}
    >
      <div className={classnames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map(err => (
          <Text
            key={err}
            theme={TextTheme.ERROR}
            text={validatedErrTranslation[err]}
          />
        ))}
        <ProfileCard
          data={formData}
          readOnly={readOnly}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
