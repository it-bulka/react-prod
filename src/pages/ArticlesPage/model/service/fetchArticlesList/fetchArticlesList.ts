import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig , StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'

type FetchArticlesListProps = {
  page?: number
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

    const limit = getArticlesPageLimit(getState() as StateSchema)

    try {
      const res = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      })
      if(!res.data) throw new Error()
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
