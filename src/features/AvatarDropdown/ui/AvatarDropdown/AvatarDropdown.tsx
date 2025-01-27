import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import {
  isUserAdmin, isUserManager , getUserAuthData, userActions
} from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { Dropdown } from '@/shared/ui'
import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar'

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

    return (
      <Dropdown
        direction="bottom left"
        className={className}
        items={[
            ...(isAdminPanelAvailable ? [{
                content: t('admin'),
                href: RoutePath.admin_panel
            }] : []),
            {
                content: t('profile'),
                href: `${RoutePath.profile}${authData.id}`
            },
            {
                content: t('log_out'),
                onClick: onLogout
            }
        ]}
        trigger={<Avatar size={30} src={authData.avatar} />}
      />
    )
})
