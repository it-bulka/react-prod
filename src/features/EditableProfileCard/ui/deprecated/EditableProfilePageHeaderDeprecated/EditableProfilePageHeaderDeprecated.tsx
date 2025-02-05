import { MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import { Translations } from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import {
 Button as ButtonDeprecated, Text as TextDeprecated, ThemeButton
} from '@/shared/ui'

import cls from './EditableProfilePageHeaderDeprecated.module.scss'

interface EditableProfilePageHeaderDeprecatedProps {
  className?: string
  canEdit: boolean
  readOnly: boolean
  onEdit: MouseEventHandler<HTMLButtonElement>
  onCancelEdit: MouseEventHandler<HTMLButtonElement>
  onSave: MouseEventHandler<HTMLButtonElement>
}
export const EditableProfilePageHeaderDeprecated = ({
  className,
  canEdit,
  readOnly,
  onEdit,
  onCancelEdit,
  onSave
}: EditableProfilePageHeaderDeprecatedProps) => {
  const { t } = useTranslation(Translations.PROFILE)

  return (
    <div className={classnames(cls.profilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <TextDeprecated title={t('profile')} />
        {canEdit && (
          <div className={cls.btnsWrapper}>
            {readOnly
              ? (
                <ButtonDeprecated
                  className={cls.editBtn}
                  theme={ThemeButton.OUTLINE}
                  onClick={onEdit}
                  data-testid="EditableProfilePageHeader.EditButton"
                >
                  {t('edit')}
                </ButtonDeprecated>
              )
              : (
                <>
                  <ButtonDeprecated
                    className={cls.editBtn}
                    theme={ThemeButton.OUTLINE_RED}
                    onClick={onCancelEdit}
                    data-testid="EditableProfilePageHeader.CancelButton"
                  >
                    {t('cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    className={cls.saveBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={onSave}
                    data-testid="EditableProfilePageHeader.ApplyButton"
                  >
                    {t('apply')}
                  </ButtonDeprecated>
                </>
              )}
          </div>
        )}
      </div>
    </div>
  )
}
