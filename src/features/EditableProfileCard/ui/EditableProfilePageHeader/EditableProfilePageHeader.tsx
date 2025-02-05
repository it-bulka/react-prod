import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
  profileActions, updateProfileData, getProfileReadonly, getProfileData
} from '@/entities/Profile'
import { getUserAuthData } from '@/entities/User'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import {
  EditableProfilePageHeaderDeprecated
} from '../deprecated/EditableProfilePageHeaderDeprecated/EditableProfilePageHeaderDeprecated'
import {
  EditableProfilePageHeaderRedesigned
} from '../redesigned/EditableProfilePageHeaderRedesigned/EditableProfilePageHeaderRedesigned'

interface ProfilePageHeaderProps {
  className?: string
}

export const EditableProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
 const readOnly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  // editing
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const commonProps = {
    className,
    canEdit,
    readOnly,
    onEdit,
    onCancelEdit,
    onSave
  }
  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={<EditableProfilePageHeaderDeprecated {...commonProps} />}
      on={<EditableProfilePageHeaderRedesigned {...commonProps} avatar={authData?.avatar} />}
    />
  )
}
