import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsComment/fetchCommentsByArticleId',
  async (articleId, thuncAPI) => {
    const { extra, rejectWithValue } = thuncAPI

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const res = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      if(!res.data) {
        throw new Error()
      }

      return res.data
    } catch {
      return rejectWithValue('error')
    }
  }
)
