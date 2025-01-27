import { PropsWithChildren, memo } from 'react'

import cls from './Modal.module.scss'

import classnames from '../../../libs/classnames/classnames'
import { useModal } from '../../../libs/hooks/useModal/useModal'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal/Portal'

export interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = memo(({
  children,
  className,
  isOpen = false,
  onClose
}: PropsWithChildren<ModalProps>) => {
  const { isClosing, closeHandler } = useModal({
    onClose,
    isOpen
  })

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classnames(cls.modal, mods, [className])}
      >
        <Overlay
          onClick={closeHandler}
        />
        <div
          className={classnames(cls.content)}
          onClick={e => e.stopPropagation()}
          onKeyDown={e => e.stopPropagation()}
          role="button"
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
})

Modal.displayName = 'Modal'
