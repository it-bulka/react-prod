import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig , StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailsData } from '@/entities/Article'
import { Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'

import {
  fetchCommentsByArticleId
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'article/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      rejectWithValue,
      extra,
      dispatch,
      getState
    } = thunkAPI

    const state = getState() as StateSchema

    const currentUser = getUserAuthData(state)
    const article = getArticleDetailsData(state)
    try {
      const res = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: currentUser?.id,
        text
      })

      if(!res.data) throw new Error()
      dispatch(fetchCommentsByArticleId(article?.id))

      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
