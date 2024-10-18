import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import {
 Translations ,
  Currency,
  Country
} from 'shared/const/common'
import {
  Text, TextTheme, TextAlign, Button, ThemeButton, Input,
  Loader
} from 'shared/ui'
import { Profile } from 'entities/Profile'
import { CurrencySelect } from 'entities/Currency'
import { CountrySelect } from 'entities/Country/ui/CountrySelect'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
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
    <div className={classnames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        <Button
          className={cls.editBtn}
          theme={ThemeButton.OUTLINE}
        >
          {t('edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('your username')}
          className={cls.input}
        />
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t('your name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('your surname')}
          className={cls.input}
        />
        <Input
          value={data?.age?.toString()}
          onChange={onChangeAge}
          placeholder={t('your age')}
          className={cls.input}
        />
        <Input
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
