import { memo } from 'react'

import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import { Comment } from '../../model/types/comment'
import { CommentCardDeprecated, CommentCardLoadingDeprecated } from '../deprecated/CommentCardDeprecated/CommentCardDeprecated'
import { CommentCardRedesigned } from '../redesigned/CommentCardRedesigned/CommentCardRedesigned'

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
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<CommentCardLoadingDeprecated />}
        on={<CommentCardLoadingDeprecated />}
      />
    )
  }

  if (!comment) return null

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={<CommentCardDeprecated comment={comment} className={className} />}
      on={<CommentCardRedesigned comment={comment} className={className} />}
    />
  )
})

CommentCard.displayName = 'CommentCard'
