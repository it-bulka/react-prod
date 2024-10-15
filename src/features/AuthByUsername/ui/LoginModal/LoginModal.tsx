import { type FC, Suspense } from 'react'
import { Modal, ModalProps } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async'
import { Loader } from 'shared/ui/Loader/ui/Loader'

interface LoginModalProps extends ModalProps {
  onSuccess: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, onClose, isOpen, onSuccess }) => {
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
}
