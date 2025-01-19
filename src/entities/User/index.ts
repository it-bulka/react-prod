export { getUserAuthData, getUserTheme } from '@/entities/User/model/selectors/getUserAuthData'
export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors'

export { UserRole } from '@/entities/User/model/consts/consts'
export type { User, UserSchema } from '@/entities/User/model/types/user'
export { userActions, userReducers } from './model/slice/userSlice'
export { saveJsonSettings } from './model/services/saveJsonSettings'
export type { JsonSettings } from './model/types/jsonSettings'
export { useJsonSettings, getJsonSettings } from '@/entities/User/model/selectors/jsonSettings'
