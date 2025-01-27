import { useTranslation } from 'react-i18next'

import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import {
 AppLink, AppLinkTheme, Text, TextTheme
} from '@/shared/ui'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from '../NavBar.module.scss'

export const NavBar = () => {
  const { t } = useTranslation()

  return (
    <nav className={cls.navbar}>
      <Text
        className={cls.appName}
        title={t('Iv.G. App')}
        theme={TextTheme.INVERTED}
      />
      <AppLink
        to={RoutePath.article_create}
        theme={AppLinkTheme.SECONDARY}
        className={cls.createBtn}
      >
        {t('creation article')}
      </AppLink>
      <HStack gap="16" className={cls.actions}>
        <NotificationButton />
        <AvatarDropdown />
      </HStack>
    </nav>
  )
}
