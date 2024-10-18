import { useCallback, useEffect } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { profileReducer, profileActions } from 'entities/Profile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import { getProfileFormData } from 'entities/Profile/model/selectors/getProfileFormData/getProfileFormData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Country, Currency } from 'shared/const/common'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileFormData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  useEffect(() => {
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
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={reducers}
    >
      <div className={classnames('', {}, [className])}>
        <ProfileCard
          data={formData}
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
