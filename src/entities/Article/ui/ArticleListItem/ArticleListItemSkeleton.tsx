import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { Card } from '@/shared/ui'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import cls from './ArticleListItem.module.scss'

import { ArticleView } from '../../model/const/const'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo(({
  className,
  view
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.img} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  )
})
