import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import { VStack } from 'shared/ui/Stack'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import cls from './NotificationList.module.scss'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { useNotification } from '../../model/api/notificationApi'

interface NotificationListProps {
    className?: string
}

export const NotificationList = memo(({
  className
}: NotificationListProps) => {
  const { data, isLoading} = useNotification(null, {
    pollingInterval: 10000
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

  return (
    <VStack
      gap="16"
      max
      className={classnames(cls.notificationList, {}, [className])}
    >
      {data?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
    )
})
