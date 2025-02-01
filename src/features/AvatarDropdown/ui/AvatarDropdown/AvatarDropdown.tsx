import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
  isUserAdmin, isUserManager , getUserAuthData, userActions
} from '@/entities/User'
import { RoutePath , getRouteSettings } from '@/shared/config/routeConfig/routeConfig'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Dropdown as DropdownDeprecated } from '@/shared/ui'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/redesigned/Popups'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({
  className
}: AvatarDropdownProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)

    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const isAdminPanelAvailable = useMemo(() => {
        return isAdmin || isManager
    }, [isAdmin, isManager])

    const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch])

    if (!authData) {
        return null
    }

    const items = [
      ...(isAdminPanelAvailable ? [{
        content: t('admin'),
        href: RoutePath.admin_panel
      }] : []),
      {
        content: t('profile'),
        href: `${RoutePath.profile}${authData.id}`
      },
      {
        content: t('settings'),
        href: getRouteSettings()
      },
      {
        content: t('log_out'),
        onClick: onLogout
      }
    ]

    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={(
          <Dropdown
            direction="bottom left"
            className={className}
            items={items}
            trigger={<Avatar size={40} src={authData.avatar} />}
          />
        )}
        off={(
          <DropdownDeprecated
            direction="bottom left"
            className={className}
            items={items}
            trigger={<AvatarDeprecated size={30} src={authData.avatar} />}
          />
        )}
      />
    )
})
