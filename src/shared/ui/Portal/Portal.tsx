import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'

interface PortalProps {
  element?: HTMLElement;
}
export const Portal = ({ children, element = document.body }: PropsWithChildren<PortalProps>) => {
  return createPortal(children, element)
}
