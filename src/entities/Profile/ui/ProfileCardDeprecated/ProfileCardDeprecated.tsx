import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { Translations } from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import {
 Input as InputDeprecated , Text as TextDeprecated, TextAlign, TextTheme , Loader
} from '@/shared/ui'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './ProfileCardDeprecated.module.scss'

import { ProfileCardProps } from '../../model/types/profile'

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation(Translations.PROFILE)

  return (
    <HStack
      justify="center"
      max
      className={classnames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('upload error')}
        text={t('try to update page')}
        align={TextAlign.CENTER}
      />
    </HStack>
  )
}

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classnames(cls.ProfileCard, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  )
}

export const ProfileCardDeprecated = ({
  className,
  data,
  readOnly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCountry,
  onChangeCurrency
} : ProfileCardProps) => {
  const { t } = useTranslation(Translations.PROFILE)

  return (
    <div className={classnames(cls.profileCard, { [cls.editing]: !readOnly }, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <AvatarDeprecated src={data?.avatar} />
          </div>
        )}
        <InputDeprecated
          readOnly={readOnly}
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('your username')}
          className={cls.input}
          data-testid="ProfileCard.username"
        />
        <InputDeprecated
          readOnly={readOnly}
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t('your name')}
          className={cls.input}
          data-testid="ProfileCard.firstname"
        />
        <InputDeprecated
          readOnly={readOnly}
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('your surname')}
          className={cls.input}
        />
        <InputDeprecated
          readOnly={readOnly}
          value={data?.age?.toString()}
          onChange={onChangeAge}
          placeholder={t('your age')}
          className={cls.input}
        />
        <InputDeprecated
          readOnly={readOnly}
          value={data?.city}
          onChange={onChangeAvatar}
          placeholder={t('your avatar')}
          className={cls.input}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
        />
        <InputDeprecated
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your city')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
