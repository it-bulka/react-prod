import { StateSchema } from '@/app/providers/StoreProvider'

export const getScrollTrigger = (state: StateSchema) => state.scrollToTop.trigger
