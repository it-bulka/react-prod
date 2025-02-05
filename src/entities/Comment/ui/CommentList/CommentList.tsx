import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Text as TextDeprecated } from '@/shared/ui'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './CommentList.module.scss'

import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(({
  className,
  isLoading,
  comments
}: CommentListProps) => {
  const { t } = useTranslation()

  if(isLoading) {
    return (
      <VStack gap="16" max className={classnames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classnames('', {}, [className])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
            key={comment.id}
          />
        ))
        : (
          <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={<Text text={t('no comments')} />}
            off={<TextDeprecated text={t('no comments')} />}
          />
        )}
    </VStack>
  )
})

CommentList.displayName = 'CommentList'
