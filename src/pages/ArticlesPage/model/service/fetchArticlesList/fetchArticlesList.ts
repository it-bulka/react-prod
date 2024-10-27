import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { Article } from 'entities/Article'

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const res = await extra.api.get('/articles', {
        params: {
          _expand: 'user'
        }
      })
      if(!res.data) throw new Error()
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
