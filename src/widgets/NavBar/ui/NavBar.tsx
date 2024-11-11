import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useState, memo, useCallback } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { userActions } from 'entities/User/model/slice/userSlice'
import {
  Text, TextTheme, AppLink, AppLinkTheme,
  Dropdown
} from 'shared/ui'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const openModal = useCallback(() => setIsAuthModalOpen(true), [setIsAuthModalOpen])
  const closeModal = useCallback(() => setIsAuthModalOpen(false),[setIsAuthModalOpen])
  const onLogout = useCallback(() => dispatch(userActions.logout()), [dispatch])

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
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
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
