import classnames from '@/shared/libs/classnames/classnames'
import { Card as CardDeprecated, Card } from '@/shared/ui'
import { Skeleton as SkeletonDeprecated, Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton'

import cls from '../../ArticleListItemDeprecated/ArticleListItemDeprecated.module.scss'
import { ArticleListItemSkeletonProps } from '../types'

export const SkeletonBigDeprecated = ({view, className}: ArticleListItemSkeletonProps) => {
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

export const SkeletonSmallDeprecated = ({view, className}: ArticleListItemSkeletonProps) => {
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
}
