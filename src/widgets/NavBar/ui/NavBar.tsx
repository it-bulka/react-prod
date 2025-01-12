import {
 useState, memo, useCallback
} from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationButton } from '@/features/NotificationButton'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import {
  Text, TextTheme, AppLink, AppLinkTheme
} from '@/shared/ui'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import { HStack } from '@/shared/ui/Stack'

import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const authData = useSelector(getUserAuthData)

  const openModal = useCallback(() => setIsAuthModalOpen(true), [setIsAuthModalOpen])
  const closeModal = useCallback(() => setIsAuthModalOpen(false),[setIsAuthModalOpen])

  if(authData) {
    return (
      <nav className={classnames(cls.navbar, {}, [className])}>
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
  return (
    <nav className={classnames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={openModal}
      >
        {t('log_in')}
      </Button>
      {isAuthModalOpen && (
        <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} onSuccess={closeModal} />
      )}
    </nav>
  )
})

NavBar.displayName = 'NavBar'
