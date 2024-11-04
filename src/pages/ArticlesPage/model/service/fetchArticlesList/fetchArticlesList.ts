import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig , StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { Article, ArticleType } from 'entities/Article'
import { addQueryParams } from 'shared/libs/url/addQueryParams/addQueryParams'
import {
  getArticlesPageLimit,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageOrder,
  getArticlesPageSearch
} from '../../selectors/articlesPageSelectors'

type FetchArticlesListProps = {
  page?: number
  replace?: boolean
} | void

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const page = props?.page || 1
    const { extra, rejectWithValue, getState } = thunkAPI

    const state = getState() as StateSchema

    const limit = getArticlesPageLimit(state)
    const sort = getArticlesPageSort(state)
    const order = getArticlesPageOrder(state)
    const search = getArticlesPageSearch(state)
    const type = getArticlesPageType(state)

    try {
      addQueryParams({
        sort, order, search, type
      })
      const res = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type
        }
      })
      if(!res.data) throw new Error()
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
