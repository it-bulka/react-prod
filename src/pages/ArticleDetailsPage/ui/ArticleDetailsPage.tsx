import classnames from 'shared/libs/classnames/classnames'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui'
import { AddCommentFormAsync } from 'features/addCommentForm'
import {
  articleDetailsCommentsReducer,
  getArticleDetailsComments
} from '../model/slice/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'
import { getArticleCommentsIsLoading } from '../model/selectors/comments'
import {
  fetchCommentsByArticleId
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
  addCommentForArticle
} from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const params = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  if(!params.id) {
    return (
      <div className={classnames(cls.ArticleDetailsPage, {}, [className])}>
        {t('article is not found')}
      </div>
    )
  }

  useEffect(() => {
    if(__PROJECT_ENV__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(params.id))
    }
  }, [dispatch, params.id])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classnames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={params.id} />
        <Text className={cls.commentTitle} title={t('comments')} />
        <AddCommentFormAsync onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  )
})

ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
