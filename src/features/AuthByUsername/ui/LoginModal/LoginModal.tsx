import { Suspense, memo } from 'react'

import { Loader } from '@/shared/ui/deprecated/Loader/ui/Loader'
import { Modal, ModalProps } from '@/shared/ui/redesigned/Modal/Modal'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

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
