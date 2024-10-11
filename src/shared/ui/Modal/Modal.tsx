import { Portal } from 'shared/ui/Portal/Portal'
import {
  PropsWithChildren, useCallback, useEffect, useRef, useState
} from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './Modal.module.scss'

export interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300

export const Modal = ({
  children,
  className,
  isOpen = false,
  onClose
}: PropsWithChildren<ModalProps>) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const closeHandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if(isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  return (
    <Portal>
      <div
        data-testid="modal"
        className={classnames(cls.modal, mods, [className])}
        onClick={closeHandler}
        onKeyDown={undefined}
        role="button"
        tabIndex={0}
      >
        <div
          className={classnames(cls.content)}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          role="button"
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}
