export {
  Profile,
  ProfileSchema
} from './model/types/profile'

export {
  profileActions,
  profileReducer
} from './model/slice/profileSlice'

export { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
export { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'
