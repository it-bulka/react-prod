import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { User } from '@/entities/User'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { Button } from '@/shared/ui/redesigned/Button/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleAdditionalInfoProps {
  className?: string
  author: User
  createdAt: string
  views: number
  onEdit: () => void
}

export const ArticleAdditionalInfo = memo(({
  className,
  author,
  createdAt,
  views,
  onEdit
}: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation('articles')

    return (
      <VStack
        gap="32"
        align="stretch"
        className={className}
      >
        <VStack max align="stretch" gap="8">
          <HStack gap="8">
            <Avatar src={author.avatar} size={32} />
            <Text text={author.username} bold />
          </HStack>
          <Text text={createdAt} />
          <Button onClick={onEdit}>{t('edit')}</Button>
        </VStack>

        <Text text={t('views-amount', { count: views })} />
      </VStack>
    )
  })
