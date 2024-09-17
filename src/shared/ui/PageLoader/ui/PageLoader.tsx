import { type FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import { Loader } from 'shared/ui/Loader/ui/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classnames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
