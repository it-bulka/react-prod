import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Article } from 'entities/Article'
import { StateSchema } from 'app/providers/StoreProvider'
import {
  ArticleDetailsRecommendationsSchema
} from '../types/ArticleDetailsRecommendationsSchema'
import {
  fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article, string>({
  selectId: article => article.id
})

export const getArticlesRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleRecommendations.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {
  reducer: articleDetailsPageRecommendationsReducer
} = articleDetailsPageRecommendationsSlice
