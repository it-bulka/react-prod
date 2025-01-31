import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { Card as CardDeprecated } from '@/shared/ui'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton'

import cls from '../ArticleListItemDeprecated/ArticleListItemDeprecated.module.scss'
import { SkeletonBigDeprecated } from './deprecated/SkeletonDeprecated'
import { SkeletonBigRedesigned } from './redesigned/SkeletonRedesigned'
import { ArticleListItemSkeletonProps } from './types'
import { ArticleView } from '../../../model/const/const'

export const ArticleListItemSkeleton = memo(({
  className,
  view
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<SkeletonBigRedesigned className={className} view={view} />}
        off={<SkeletonBigDeprecated className={className} view={view} />}
      />
    )
  }

  return (
    <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <CardDeprecated className={cls.card}>
        <div className={cls.imageWrapper}>
          <SkeletonDeprecated width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <SkeletonDeprecated width={130} height={16} />
        </div>
        <SkeletonDeprecated width={150} height={16} className={cls.title} />
      </CardDeprecated>
    </div>
  )
})
