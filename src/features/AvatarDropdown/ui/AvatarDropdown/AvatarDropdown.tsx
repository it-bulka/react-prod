import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Dropdown } from 'shared/ui'
import { useSelector } from 'react-redux'
import { isUserAdmin, isUserManager , getUserAuthData } from 'entities/User'
import { userActions } from 'entities/User/model/slice/userSlice'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'

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
