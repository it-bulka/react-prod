import { MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import SendIcon from '@/shared/assets/icons/send.svg'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'
import { Input } from '@/shared/ui/redesigned/Input/Input'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface AddCommentFormRedesignedProps {
  text?: string
  onCommentTextChange: (value: string) => void
  onSendHandler: MouseEventHandler<HTMLButtonElement>
}
export const AddCommentFormRedesigned = ({
  text,
  onCommentTextChange,
  onSendHandler
}: AddCommentFormRedesignedProps) => {
  const { t } = useTranslation('comment')

  return (
    <HStack
      data-testid="AddCommentForm"
      justify="between"
      max
      gap="16"
    >
      <Input
        placeholder={t('write a comment')}
        value={text}
        data-testid="AddCommentForm.Input"
        onChange={onCommentTextChange}
      />
      <Icon
        Svg={SendIcon}
        clickable
        onClick={onSendHandler}
        data-testid="AddCommentForm.Button"
      />
    </HStack>
  )
}
