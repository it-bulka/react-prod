import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { Article, ArticleView } from '../../model/types/articles'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean;
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  // eslint-disable-next-line react/no-array-index-key
  .map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)

export const ArticleList = memo(({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL
}: ArticleListProps) => {
  if(isLoading) {
    return (
      <div className={classnames(cls.articleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={classnames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(article => (
          <ArticleListItem
            article={article}
            view={view}
            key={article.id}
          />
          ))
        : null}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
