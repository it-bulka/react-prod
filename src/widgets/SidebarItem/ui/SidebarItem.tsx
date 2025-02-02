import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink/AppLink'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'

import cls from './SidebarItem.module.scss'

import { SidebarItemType } from '../../SideBar/model/types/items'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
  'data-testid'?: string
}
export const SidebarItem = memo(({ item, collapsed, 'data-testid': dataTestId }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData)

  if(item.authOnly && !isAuth) {
    return null
  }

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classnames(cls.item, { [cls.collapsed]: collapsed })}
          data-testId={dataTestId}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>
            {t(item.text)}
          </span>
        </AppLinkDeprecated>
      )}
      on={(
        <AppLink
          to={item.path}
          className={classnames(cls.itemRedesigned, {
            [cls.collapsedRedesigned]: collapsed
          })}
          activeClassName={cls.active}
          data-testId={dataTestId}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      )}
    />
  )
})

SidebarItem.displayName = 'SidebarItem'
