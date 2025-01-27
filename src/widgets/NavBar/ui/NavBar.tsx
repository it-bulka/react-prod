import {
 useState, memo, useCallback
} from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button/Button'

import cls from './NavBar.module.scss'

import { NavBar as DeprecatedNavBar } from './deprecated/NavBar'
import { NavBar as RedesignedNavBar } from './redesigned/NavBar'

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
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<DeprecatedNavBar />}
        on={<RedesignedNavBar />}
      />
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
