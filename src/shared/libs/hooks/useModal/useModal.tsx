import {
 useCallback, useEffect, useRef, useState
} from 'react'

interface UseModalProps {
  isOpen?: boolean
  onClose?: () => void
  animationDelay?: number
}

const ANIMATION_DELAY = 300

export const useModal = ({
  onClose,
  animationDelay = ANIMATION_DELAY,
  isOpen = false
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<NodeJS.Timeout>()

  const closeHandler = useCallback(() => {
    if(onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
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

  return { isClosing, closeHandler }
}
