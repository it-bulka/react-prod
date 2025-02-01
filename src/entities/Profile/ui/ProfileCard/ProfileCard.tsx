import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import { ProfileCardProps } from '../../model/types/profile'
import {
  ProfileCardDeprecated, ProfileCardDeprecatedError, ProfileCardDeprecatedLoader
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
  ProfileCardRedesignedSkeleton, ProfileCardRedesignedError, ProfileCardRedesigned
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

export const ProfileCard = ({
  error,
  isLoading,
  ...restProps
}: ProfileCardProps) => {
  if (isLoading) {
    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...restProps} />}
      off={<ProfileCardDeprecated {...restProps} />}
    />
  )
}
