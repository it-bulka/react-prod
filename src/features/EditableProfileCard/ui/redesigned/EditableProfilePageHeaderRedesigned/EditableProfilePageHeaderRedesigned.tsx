import { MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import { Translations } from '@/shared/const/common'
import classnames from '@/shared/libs/classnames/classnames'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { Button } from '@/shared/ui/redesigned/Button/Button'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './EditableProfilePageHeaderRedesigned.module.scss'

interface EditableProfilePageHeaderRedesignedProps {
  className?: string
  canEdit: boolean
  readOnly: boolean
  onEdit: MouseEventHandler<HTMLButtonElement>
  onCancelEdit: MouseEventHandler<HTMLButtonElement>
  onSave: MouseEventHandler<HTMLButtonElement>
  avatar?: string
}
export const EditableProfilePageHeaderRedesigned = ({
  className,
  canEdit,
  readOnly,
  onEdit,
  onCancelEdit,
  onSave,
  avatar
}: EditableProfilePageHeaderRedesignedProps) => {
  const { t } = useTranslation(Translations.PROFILE)

  return (
    <Card padding="24" max border="round-m">
      <HStack
        max
        justify="between"
        className={classnames('', {}, [className])}
        gap="4"
      >
        {canEdit && readOnly ? (
          <>
            <div className={cls.left} />
            <Avatar src={avatar} />
            <div className={cls.right}>
              <Button
                onClick={onEdit}
                data-testid="EditableProfilePageHeader.EditButton"
              >
                {t('edit')}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={cls.left}>
              <Button
                onClick={onCancelEdit}
                data-testid="EditableProfilePageHeader.CancelButton"
                color="error"
              >
                {t('cancel')}
              </Button>
            </div>
            <Avatar src={avatar} />
            <div className={cls.right}>
              <Button
                onClick={onSave}
                data-testid="EditableProfilePageHeader.ApplyButton"
                color="success"
              >
                {t('apply')}
              </Button>
            </div>
          </>
        )}
      </HStack>
    </Card>
  )
}
