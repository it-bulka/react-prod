import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from 'shared/ui'
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
      <div className={classnames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }

  return (
    <div className={classnames('', {}, [className])}>
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
    </div>
  )
})

CommentList.displayName = 'CommentList'
