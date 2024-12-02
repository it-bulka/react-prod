import classnames, { Mods } from 'shared/libs/classnames/classnames'
import { Portal } from 'shared/ui/Portal/Portal'
import { Overlay } from 'shared/ui/Overlay/Overlay'
import { memo, PropsWithChildren } from 'react'
import { useTheme } from 'app/providers'
import { useModal } from 'shared/libs/hooks/useModal/useModal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo(({
  className,
  isOpen = false,
  onClose,
  children
}: PropsWithChildren<DrawerProps>) => {
  const { theme } = useTheme()
  const { isClosing, closeHandler } = useModal({
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
    <Portal>
      <div className={classnames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={closeHandler} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
})
