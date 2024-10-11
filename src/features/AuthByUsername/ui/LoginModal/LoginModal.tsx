import { type FC } from 'react'
import { Modal, ModalProps } from 'shared/ui/Modal/Modal'
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

interface LoginModalProps extends ModalProps {}

export const LoginModal: FC<LoginModalProps> = ({ className, onClose, isOpen }) => {
  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm withFocus={isOpen} />
    </Modal>
  )
}
