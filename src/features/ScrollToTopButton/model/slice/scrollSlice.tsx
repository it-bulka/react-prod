import { buildSlice } from '@/shared/libs/store'

import { ScrollToTopSchema } from '../types/scrollToTop'

const initialState: ScrollToTopSchema = {
 trigger: 0
}
export const scrollToTopSlice = buildSlice({
  name: 'scroll',
  initialState,
  reducers: {
    scrollToTop: state => {
      state.trigger += 1
    }
  }
})

export const {
  actions: scrollToTopActions,
  reducer: scrollToTopReducer,
  useActions: useScrollToTopActions
} = scrollToTopSlice
