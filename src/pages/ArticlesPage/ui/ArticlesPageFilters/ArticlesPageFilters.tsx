import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
  ArticleView,
  ArticleType,
  ArticleSortSelector,
  ArticleViewSelector,
  ArticleSortField,
  ArticleTypeTabs
} from '@/entities/Article'
import classnames from '@/shared/libs/classnames/classnames'
import { useDebounce } from '@/shared/libs/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types'
import { Card, Input } from '@/shared/ui'

import cls from './ArticlesPageFilters.module.scss'

import {
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageSearch,
  getArticlesPageOrder,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'

interface ArticlesPageFiltersProps {
  className?: string
}

const DEBAUNCE_FETCH_DATA_DELAY = 500

export const ArticlesPageFilters = memo(({
  className
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const type = useSelector(getArticlesPageType)
  const search = useSelector(getArticlesPageSearch)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debounceFetchData = useDebounce(fetchData, DEBAUNCE_FETCH_DATA_DELAY)

  const onChangeView = useCallback((articleView: ArticleView) => {
    dispatch(articlesPageActions.setView(articleView))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((s: string) => {
    dispatch(articlesPageActions.setSearch(s))
    dispatch(articlesPageActions.setPage(1))
    debounceFetchData()
  }, [dispatch, debounceFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    debounceFetchData()
  }, [dispatch, debounceFetchData])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
    <div className={classnames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('search', { ns: 'translation'})}
          data-testid="ArticlesPageFilters.search"
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
})
