import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import {
 Translations ,
  Currency,
  Country
} from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import {
  Text, TextTheme, TextAlign, Input,
  Loader
} from '@/shared/ui'
import { Avatar } from '@/shared/ui/Avatar/Avatar'

import cls from './ProfileCard.module.scss'

import { Profile } from '../../model/types/profile'

interface ProfileCardProps {
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
export const ProfileCard = ({
  className,
  data,
  readOnly = false,
  error,
  isLoading,
  onChangeFirstname,
  onChangeLastname,
  onChangeUsername,
  onChangeCity,
  onChangeAvatar,
  onChangeAge,
  onChangeCurrency,
  onChangeCountry
}: ProfileCardProps) => {
  const { t } = useTranslation(Translations.PROFILE)

  if (isLoading) {
    return (
      <div className={classnames(cls.profileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classnames(cls.profileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('upload error')}
          text={t('try to update page')}
          align={TextAlign.CENTER}
        />
      </div>
    )
  }

  return (
    <div className={classnames(cls.profileCard, { [cls.editing]: !readOnly }, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <Input
          readOnly={readOnly}
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('your username')}
          className={cls.input}
          data-testid="ProfileCard.username"
        />
        <Input
          readOnly={readOnly}
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t('your name')}
          className={cls.input}
          data-testid="ProfileCard.firstname"
        />
        <Input
          readOnly={readOnly}
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('your surname')}
          className={cls.input}
        />
        <Input
          readOnly={readOnly}
          value={data?.age?.toString()}
          onChange={onChangeAge}
          placeholder={t('your age')}
          className={cls.input}
        />
        <Input
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
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your city')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
