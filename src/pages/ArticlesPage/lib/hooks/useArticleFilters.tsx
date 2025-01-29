import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { useDebounce } from '@/shared/libs/hooks/useDebounce/useDebounce'
import { SortOrder } from '@/shared/types'

import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'

const DEBAUNCE_FETCH_DATA_DELAY = 500

export const useArticleFilters = () => {
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

  return {
    view,
    sort,
    order,
    type,
    search,
    onChangeView,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
    onChangeSort
  }
}
