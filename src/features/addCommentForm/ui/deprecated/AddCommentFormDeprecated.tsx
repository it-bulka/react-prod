import { type FC, MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'
import { Button as ButtonDeprecated, Input as InputDeprecated, ThemeButton } from '@/shared/ui'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './AddCommentFormDeprecated.module.scss'

interface AddCommentFormDeprecatedProps {
  className?: string
  text?: string
  onCommentTextChange: (value: string) => void
  onSendHandler: MouseEventHandler<HTMLButtonElement>
}
export const AddCommentFormDeprecated: FC<AddCommentFormDeprecatedProps> = ({
  className,
  text,
  onCommentTextChange,
  onSendHandler
}) => {
  const { t } = useTranslation('comment')

  return (
    <HStack justify="between" max className={classnames(cls.addCommentForm, {}, [className])} data-testid="AddCommentForm">
      <InputDeprecated
        className={cls.input}
        placeholder={t('write a comment')}
        value={text}
        onChange={onCommentTextChange}
        focus
        autofocus
        data-testid="AddCommentForm.Input"
      />
      <ButtonDeprecated
        theme={ThemeButton.OUTLINE}
        onClick={onSendHandler}
        data-testid="AddCommentForm.Button"
      >
        {t('send')}
      </ButtonDeprecated>
    </HStack>
  )
}
