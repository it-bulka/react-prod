import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Translations } from 'shared/const/common'
import {
  Text, TextTheme, TextAlign, Button, ThemeButton, Input,
  Loader
} from 'shared/ui'
import { Profile } from 'entities/Profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
}
export const ProfileCard = ({
  className,
  data,
  error,
  isLoading
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
          value={data?.first}
          placeholder={t('your name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('your surname')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
