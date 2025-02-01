import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { toggleFeatures } from '@/shared/libs/features/lib/toggleFeatures'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './NotificationList.module.scss'

import { useNotification } from '../../model/api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({
  className
}: NotificationListProps) => {
  const { data, isLoading} = useNotification(null, {
    pollingInterval: __PROJECT_ENV__ === 'storybook' ? undefined : 10000
  })

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })

  if(isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classnames(cls.notificationList, {}, [className])}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    )
  }

  const gap = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => undefined,
    off: () => '16' as const
  })

  return (
    <VStack
      gap={gap}
      max
      className={classnames(cls.notificationList, {}, [className])}
    >
      {data?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
    )
})
