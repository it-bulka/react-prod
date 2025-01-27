import { memo } from 'react'

import cls from './PageLoader.module.scss'

import classnames from '../../../../libs/classnames/classnames'
import { Loader } from '../../Loader/ui/Loader'

interface PageLoaderProps {
  className?: string
}

/**
 * @deprecated
 */
export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classnames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
})

PageLoader.displayName = 'PageLoader'
