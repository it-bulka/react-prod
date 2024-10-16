import { useEffect } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModalLoader'
import { profileReducer } from 'entities/Profile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={reducers}
    >
      <div className={classnames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
