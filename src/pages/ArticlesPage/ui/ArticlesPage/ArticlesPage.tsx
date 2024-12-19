import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'

import cls from './ArticlesPage.module.scss'

import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}
const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classnames(cls.ArticlesPage, {}, [className, 'page-wrapper'])}>
        <ArticlesPageFilters />
        <ArticleInfiniteList className={cls.list} />
      </div>
    </DynamicModuleLoader>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
