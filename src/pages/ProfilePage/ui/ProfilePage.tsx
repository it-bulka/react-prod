import { EditableProfileCard } from '@/features/EditableProfileCard'
import classnames from '@/shared/libs/classnames/classnames'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  return (
    <div className={classnames('page-wrapper', {}, [className])} data-testid="ProfilePage">
      <EditableProfileCard />
    </div>
  )
}

export default ProfilePage
