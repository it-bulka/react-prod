import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { Text, Button, ThemeButton } from 'shared/ui'
import { Translations } from 'shared/const/common'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useCallback } from 'react'
import { profileActions, updateProfileData, getProfileReadonly } from 'entities/Profile'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation(Translations.PROFILE)

  const readOnly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <div className={classnames(cls.profilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile')} />
        {readOnly
          ? (
            <Button
              className={cls.editBtn}
              theme={ThemeButton.OUTLINE}
              onClick={onEdit}
            >
              {t('edit')}
            </Button>
          )
          : (
            <>
              <Button
                className={cls.editBtn}
                theme={ThemeButton.OUTLINE_RED}
                onClick={onCancelEdit}
              >
                {t('cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                theme={ThemeButton.OUTLINE}
                onClick={onSave}
              >
                {t('apply')}
              </Button>
            </>
          )}
      </div>
    </div>
  )
}
