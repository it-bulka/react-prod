/* eslint-disable i18next/no-literal-string */
import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { articles } from 'entities/Article/ui/ArticleList/ArticleList.stories'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
    <div className={classnames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        view={ArticleView.SMALL}
        articles={articles}
      />
    </div>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
