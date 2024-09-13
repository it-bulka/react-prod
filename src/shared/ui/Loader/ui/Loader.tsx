import { type FC } from 'react'
import './Loader.scss'
import classnames from 'shared/libs/classnames/classnames';

interface LoaderProps {
  className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classnames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}