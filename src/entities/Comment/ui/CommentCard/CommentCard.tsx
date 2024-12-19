import { memo } from 'react'

import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import { Text, AppLink } from '@/shared/ui'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { VStack } from '@/shared/ui/Stack'

import cls from './CommentCard.module.scss'

import { Comment } from '../../model/types/comment'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo(({
  className,
  comment,
  isLoading
}: CommentCardProps) => {
  if (isLoading) {
    return (
      <VStack gap="8" max className={classnames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    )
  }

  if (!comment) return null

  return (
    <VStack gap="8" max className={classnames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  )
})

CommentCard.displayName = 'CommentCard'
