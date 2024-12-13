import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from '@/shared/ui'
import { VStack } from '@/shared/ui/Stack'
import cls from '../ArticleDetailsPage/ArticleDetailsPage.module.scss'
import { AddCommentFormAsync } from '@/features/addCommentForm'
import { CommentList } from '@/entities/Comment'
import { getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import {
  addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import classnames from '@/shared/libs/classnames/classnames'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}
export const ArticleDetailsComments = ({
  className,
  id
}: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useEffect(() => {
    if(__PROJECT_ENV__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(id))
    }
  }, [dispatch, id])

  return (
    <VStack gap="16" max className={classnames('', {}, [className])}>
      <Text className={cls.commentTitle} title={t('comments')} />
      <AddCommentFormAsync onSendComment={onSendComment} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </VStack>
  )
}
