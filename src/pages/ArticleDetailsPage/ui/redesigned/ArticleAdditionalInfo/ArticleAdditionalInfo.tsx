import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/ui/redesigned/Button/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleAdditionalInfoProps {
  className?: string
  views: number
  onEdit: () => void
}

export const ArticleAdditionalInfo = memo(({
  className,
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

          <Button onClick={onEdit}>{t('edit')}</Button>
        </VStack>

        <Text text={t('views-amount', { count: views })} />
      </VStack>
    )
  })
