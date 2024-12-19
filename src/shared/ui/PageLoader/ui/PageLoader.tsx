import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './PageLoader.module.scss'

import { Loader } from '../../Loader/ui/Loader'

interface PageLoaderProps {
  className?: string
}
export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={classnames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
})

PageLoader.displayName = 'PageLoader'
