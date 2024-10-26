import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useState, memo, useCallback } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { getUserAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { userActions } from 'entities/User/model/slice/userSlice'
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
        <Button
          theme={ThemeButton.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('log_out')}
        </Button>
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
