import { createSlice , PayloadAction } from '@reduxjs/toolkit'

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema'
import { Article } from '../types/articles'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetailsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state,action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer
} = articleDetailsSlice
