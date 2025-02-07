import {
  memo, HTMLAttributeAnchorTarget, useCallback, useState, useEffect, useRef
} from 'react'
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso'

import classnames from '@/shared/libs/classnames/classnames'
import {
  useScrollVirtualizationToTop
} from '@/shared/libs/hooks/useScrollVirtualizationToTop/useScrollVirtualizationToTop'

import cls from './ArticleList.module.scss'

import { ArticleView } from '../../model/const/const'
import { Article } from '../../model/types/articles'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/Skeleton/ArticleListItemSkeleton'

// Should be fixed height for virtualization from parent component className
interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPage?: () => void
  virtualization?: boolean
}

const START_ARTICLE_KYE = 'start_article_key'

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  // eslint-disable-next-line react/no-array-index-key
  .map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />)

export const ArticleList = memo(({
  className,
  articles,
  isLoading,
  view = ArticleView.SMALL,
  target,
  onLoadNextPage,
  virtualization = false
}: ArticleListProps) => {
  const [startArticleIndex] = useState(
    +(sessionStorage.getItem(START_ARTICLE_KYE) || 0)
  )
  const virtuosoRef = useRef<VirtuosoGridHandle>(null)

  useScrollVirtualizationToTop({
    virtualization,
    virtuosoRef
  })

  /* eslint-disable-next-line react/no-unstable-nested-components */
  const Footer = () => {
    if(isLoading) {
      return (
        <div className={classnames(cls.articleList, {}, [className, cls[view]])}>
          {getSkeletons(view)}
        </div>
      )
    }

    return null
  }

  const storeStartArticleNum = useCallback((index: number) => {
    sessionStorage.setItem(START_ARTICLE_KYE, JSON.stringify(index))
  }, [])

  const renderItem = useCallback((index: number, article: Article) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        key={article.id}
        target={target}
        onClick={() => storeStartArticleNum(index)}
      />
    )
  }, [storeStartArticleNum, view])

  const renderSeekPlaceholder = ({index}: {index: number}) => (
    <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  )

  useEffect(() => {
    if (!virtuosoRef.current || !startArticleIndex) return

    const timerId = setTimeout(() => {
      virtuosoRef.current!.scrollToIndex({ index: startArticleIndex })
    }, 100)

    return () => clearTimeout(timerId)
  }, [startArticleIndex])

  if(!virtualization) {
    return (
      <div className={classnames(cls.articleList, {}, [className, cls[view]])} data-testid="ArticleList">
        {articles.map(article => (
          (
            <ArticleListItem
              article={article}
              view={view}
              key={article.id}
              target={target}
            />
          )
        ))}
      </div>
    )
  }

  return (
    <div className={classnames(cls.articleList, {}, [className, cls[view]])} data-testid="ArticleList">
      {view === 'BIG'
        ? (
          <Virtuoso
            style={{ height: '100%' }}
            data={articles}
            totalCount={100}
            itemContent={renderItem}
            endReached={onLoadNextPage}
            initialTopMostItemIndex={startArticleIndex}
            components={{
              Footer
            }}
          />
        )
        : (
          <VirtuosoGrid
            style={{ height: '100%', width: '100%' }}
            listClassName={cls.SMALL}
            ref={virtuosoRef}
            data={articles}
            totalCount={articles.length}
            itemContent={renderItem}
            endReached={onLoadNextPage}
            components={{
              ScrollSeekPlaceholder: renderSeekPlaceholder,
              Footer
            }}
            scrollSeekConfiguration={{
              enter: velocity => Math.abs(velocity) > 500,
              exit: velocity => Math.abs(velocity) < 30
            }}
          />
        )}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
