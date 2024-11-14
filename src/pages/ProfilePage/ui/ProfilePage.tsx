import classnames from 'shared/libs/classnames/classnames'
import { EditableProfileCard } from 'features/EditableProfileCard'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={classnames('page-wrapper', {}, [className])}>
      <EditableProfileCard />
    </div>
  )
}

export default ProfilePage
