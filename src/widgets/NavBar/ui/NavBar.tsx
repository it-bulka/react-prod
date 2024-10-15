import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openModal = () => setIsAuthModalOpen(true)
  const closeModal = () => setIsAuthModalOpen(false)

  return (
    <nav className={classnames(cls.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={openModal}
      >
        {t('log_in')}
      </Button>
      {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />}
    </nav>
  )
}
