import classnames from 'shared/libs/classnames/classnames'
import { memo , useEffect } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { useSelector } from 'react-redux'
import {
  getArticlesPageIsLoading
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../model/service/fetchArticlesList/fetchArticlesList'
import { articlesPageReducer, articlesPageActions, getArticles } from '../model/slice/articlesPageSlice'
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

  useEffect(() => {
    if(__PROJECT_ENV__ === 'storybook') return
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classnames(cls.ArticlesPage, {}, [className])}>
        <ArticleList
          isLoading={isLoading}
          view={ArticleView.SMALL}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
