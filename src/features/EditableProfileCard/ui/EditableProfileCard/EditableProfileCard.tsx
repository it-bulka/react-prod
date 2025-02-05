import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
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
import { Country, Currency } from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './EditableProfileCard.module.scss'

import { EditableProfilePageHeader } from '../EditableProfilePageHeader/EditableProfilePageHeader'

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
        <VStack max className={classnames(cls.editableProfileCard, {}, [className])}>
          <EditableProfilePageHeader />
          {validateErrors?.length && validateErrors.map(err => {
              const commonProps = {
                  key: err,
                  theme: TextTheme.ERROR,
                  text: validatedErrTranslation[err],
                  'data-testid': 'EditableProfileCard.Error'
              }
              return (
                <ToggleFeaturesComponent
                  feature="isAppRedesigned"
                  on={<Text {...commonProps} />}
                  off={<TextDeprecated {...commonProps} />}
                />
              )
          })}
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
