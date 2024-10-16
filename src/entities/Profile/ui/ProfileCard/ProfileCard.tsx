import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Translations } from 'shared/const/common'
import {
  Text, Button, ThemeButton, Input,
  PageLoader
} from 'shared/ui'
import { useSelector } from 'react-redux'
import cls from './ProfileCard.module.scss'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'

interface ProfileCardProps {
  className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation(Translations.PROFILE)
  const data = useSelector(getProfileData)
  const err = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  if (isLoading) {
    return <PageLoader />
  }

  if (err) {
    return <p>{err}</p>
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
