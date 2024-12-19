import { useCallback, useEffect , memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { ArticleList } from '@/entities/Article'
import { Text } from '@/shared/ui'

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage'
import { articlesPageActions, getArticles } from '../../model/slice/articlesPageSlice'

interface IArticleInfiniteList {
  className?: string
}

export const ArticleInfiniteList = memo(({
  className
}: IArticleInfiniteList) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  useEffect(() => {
    if(__PROJECT_ENV__ === 'storybook') return
    if(articles.length) return
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  if (error) {
    return <Text text={t('error loading articles')} />
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
      onLoadNextPage={onLoadNextPage}
      virtualization
    />
  )
})

ArticleInfiniteList.displayName = 'ArticleInfiniteList'
