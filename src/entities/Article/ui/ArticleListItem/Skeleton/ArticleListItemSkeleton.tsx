import { memo } from 'react'

import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'

import { SkeletonBigDeprecated, SkeletonSmallDeprecated } from './deprecated/SkeletonDeprecated'
import { SkeletonBigRedesigned, SkeletonSmallRedesigned } from './redesigned/SkeletonRedesigned'
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
        on={<SkeletonBigRedesigned />}
        off={<SkeletonBigDeprecated className={className} view={view} />}
      />
    )
  }

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      on={<SkeletonSmallRedesigned />}
      off={<SkeletonSmallDeprecated className={className} view={view} />}
    />
  )
})
