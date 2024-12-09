import { memo } from 'react'
import './Loader.scss'
import classnames from '@/shared/libs/classnames/classnames'

interface LoaderProps {
  className?: string
}
export const Loader = memo(({ className }: LoaderProps) => (
  <div className={classnames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
))

Loader.displayName = 'Loader'
