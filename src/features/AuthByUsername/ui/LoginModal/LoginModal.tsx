import { Suspense, memo } from 'react'
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { Loader } from '@/shared/ui/Loader/ui/Loader'

interface LoginModalProps extends ModalProps {
  onSuccess: () => void
}

export const LoginModal = memo(({
  className,
  onClose,
  isOpen,
  onSuccess
}: LoginModalProps) => {
  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync withFocus={isOpen} onSuccess={onSuccess} />
      </Suspense>
    </Modal>
  )
})

LoginModal.displayName = 'LoginModal'
