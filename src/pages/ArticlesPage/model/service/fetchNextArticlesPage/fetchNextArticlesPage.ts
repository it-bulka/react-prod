import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig , StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
   async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const state = getState() as StateSchema

    const hasMore = getArticlesPageHasMore(state)
    const isLoading = getArticlesPageIsLoading(state)
    const page = getArticlesPageNum(state)
     const nextPage = page + 1

    if(hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(nextPage))
      dispatch(fetchArticlesList({
        page: nextPage
      }))
    }
  }
)
