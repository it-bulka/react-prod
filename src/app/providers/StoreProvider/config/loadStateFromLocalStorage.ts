import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage'

import { StateSchema } from './StateSchema'

export const loadStateFromLocalStorage = (): Partial<StateSchema> | {} => {
  try {
    const serializedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    if (serializedUser === null) {
      return {}
    }

    const authData = JSON.parse(serializedUser)
    return { user: { authData} }
  } catch (e) {
    console.error('Could not load state', e)
    return {}
  }
}
