import { getRouteProfile } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import { AppLink as AppLinkDeprecated, Text as TextDeprecated } from '@/shared/ui'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './CommentCardDeprecated.module.scss'

import { Comment } from '../../../model/types/comment'

interface CommentCardDeprecatedProps {
  className?: string
  comment: Comment
}
export const CommentCardDeprecated = ({
  className,
  comment
}: CommentCardDeprecatedProps) => {
  return (
    <VStack
      gap="8"
      max
      className={classnames(cls.commentCard, {}, [className])}
      data-testid="CommentCard.Content"
    >
      <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar ? <AvatarDeprecated size={30} src={comment.user.avatar} /> : null}
        <TextDeprecated className={cls.username} title={comment.user.username} />
      </AppLinkDeprecated>
      <TextDeprecated className={cls.text} text={comment.text} />
    </VStack>
  )
}

export const CommentCardLoadingDeprecated = () => {
  return (
    <VStack gap="8" max className={classnames(cls.commentCard, {}, [cls.loading])} data-testid="CommentCard.Loading">
      <div className={cls.header}>
        <SkeletonDeprecated width={30} height={30} border="50%" />
        <SkeletonDeprecated height={16} width={100} className={cls.username} />
      </div>
      <SkeletonDeprecated className={cls.text} width="100%" height={50} />
    </VStack>
  )
}
