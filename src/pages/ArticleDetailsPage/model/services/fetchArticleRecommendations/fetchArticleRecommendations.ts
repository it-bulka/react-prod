import { createAsyncThunk } from '@reduxjs/toolkit'
import { Article } from '@/entities/Article'
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
        }
      })

      if(!res.data) throw new Error()

      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
