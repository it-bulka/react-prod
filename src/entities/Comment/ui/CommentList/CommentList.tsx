import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'
import { Text } from '@/shared/ui'
import { VStack } from '@/shared/ui/deprecated/Stack'

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
        : <Text text={t('no comments')} />}
    </VStack>
  )
})

CommentList.displayName = 'CommentList'
