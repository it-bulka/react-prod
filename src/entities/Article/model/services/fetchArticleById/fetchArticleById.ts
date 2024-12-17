import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from '../../types/articles'
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'articles/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const res = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user'
        }
      })
      if (!res.data) throw new Error()
      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
