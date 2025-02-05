import { getRouteProfile } from '@/shared/config/routeConfig/routeConfig'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { VStack, HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { Comment } from '../../../model/types/comment'

interface CommentCardRedesignedProps {
  className?: string
  comment: Comment
}
export const CommentCardRedesigned = ({ className, comment }: CommentCardRedesignedProps) => {
  return (
    <VStack
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={className}
      align="stretch"
    >
      <AppLink to={getRouteProfile(comment.user.id)}>
        <HStack gap="8">
          {comment.user.avatar ? (
            <Avatar
              size={30}
              src={comment.user.avatar}
            />
          ) : null}
          <Text text={comment.user.username} bold />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  )
}
