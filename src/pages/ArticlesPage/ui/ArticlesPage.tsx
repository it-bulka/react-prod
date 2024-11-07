import { memo, useCallback, useEffect } from 'react'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import {
  getArticlesPageIsLoading
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { ArticlesPageFilters } from 'entities/Article/ui/ArticlesPageFilters/ArticlesPageFilters'
import classnames from 'shared/libs/classnames/classnames'
import { fetchArticlesList } from '../model/service/fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPage } from '../model/service/fetchNextArticlesPage/fetchNextArticlesPage'
import { articlesPageReducer, articlesPageActions, getArticles } from '../model/slice/articlesPageSlice'
import { getArticlesPageView } from '../model/selectors/articlesPageSelectors'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}
const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

  useEffect(() => {
    if(__PROJECT_ENV__ === 'storybook') return
    if(articles.length) return
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classnames(cls.ArticlesPage, {}, [className, 'page-wrapper'])}>
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          onLoadNextPage={onLoadNextPage}
          virtualization
        />
      </div>
    </DynamicModuleLoader>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
