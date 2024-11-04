import classnames from 'shared/libs/classnames/classnames'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useParams , useNavigate } from 'react-router'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import {
  Text, Button, ThemeButton, TextSize
} from 'shared/ui'
import { AddCommentFormAsync } from 'features/addCommentForm'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import {
  fetchArticleRecommendations
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../model/slice'
import {
  getArticleDetailsComments
} from '../model/slice/articleDetailsCommentsSlice'
import cls from './ArticleDetailsPage.module.scss'
import { getArticleCommentsIsLoading } from '../model/selectors/comments/comments'
import {
  fetchCommentsByArticleId
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
  addCommentForArticle
} from '../model/services/addCommentForArticle/addCommentForArticle'
import {
  getArticlesRecommendations
} from '../model/slice/articleDetailsPageRecommendationsSlice'
import {
  getArticleRecommendationsIsLoading
} from '../model/selectors/recommendations/recommendations'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const params = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleDetailsComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendations = useSelector(getArticlesRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  const navigate = useNavigate()

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
      dispatch(fetchArticleRecommendations())
    }
  }, [dispatch, params.id])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classnames(cls.articleDetailsPage, {}, ['page-wrapper', className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t('back to list')}
        </Button>
        <ArticleDetails id={params.id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={t('recommendations')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target="_blank"
        />
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
