import { useTranslation } from 'react-i18next'
import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import classnames from '@/shared/libs/classnames/classnames'
import { EditableProfilePageHeader } from '../EditableProfilePageHeader/EditableProfilePageHeader'
import { Text, TextTheme } from '@/shared/ui'
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileReadonly,
    getProfileValidateErrors, profileActions,
    ProfileCard, profileReducer,
    ValidateProfileError,
    getProfileIsLoading
} from '@/entities/Profile'
import { VStack } from '@/shared/ui/Stack'
import { Country, Currency } from '@/shared/const/common'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'

interface EditableProfileCardProps {
    className?: string
}

const reducers: ReducersList = {
    profile: profileReducer
}

export const EditableProfileCard = memo(({
  className
}: EditableProfileCardProps) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('profile')
    const { id } = useParams<{id: string}>()

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
        if(!id) return
        dispatch(fetchProfileData(id))
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
        <VStack gap="16" max className={classnames('', {}, [className])}>
          <EditableProfilePageHeader />
          {validateErrors?.length && validateErrors.map(err => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validatedErrTranslation[err]}
              data-testid="EditableProfileCard.Error"
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
        </VStack>
      </DynamicModuleLoader>
    )
})
