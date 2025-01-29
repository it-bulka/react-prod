import { memo } from 'react'

import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { StickyContentLayout } from '@/shared/lauouts/StickyContentLayout'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'

import cls from './ArticlesPage.module.scss'

import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { FiltersContainer } from '../FiltersContainer'
import { ViewSelectorContainer } from '../ViewSelectorContainer'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}
const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const content = (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
        <div className={classnames(cls.ArticlesPage, {}, [className, 'page-wrapper'])} data-testid="ArticlesPage">
          <ArticlesPageFilters />
          <ArticleInfiniteList className={cls.list} />
          <ArticlePageGreeting />
        </div>
      )}
      on={(
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={(
            <div
              className={classnames(cls.ArticlesPageRedesigned, {}, [className])}
              data-testid="ArticlesPage"
            >
              <ArticleInfiniteList className={cls.list} />
              <ArticlePageGreeting />
            </div>
          )}
        />
      )}
    />
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      {content}
    </DynamicModuleLoader>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
