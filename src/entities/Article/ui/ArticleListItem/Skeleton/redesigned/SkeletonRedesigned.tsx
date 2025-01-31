import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { HStack , VStack } from '@/shared/ui/redesigned/Stack'

import clsSkeleton from './SkeletonRedesigned.module.scss'

export const SkeletonBigRedesigned = () => {
  return (
    <Card
      padding="24"
      max
      className={clsSkeleton.BIG}
    >
      <HStack gap="8" max className={clsSkeleton.header}>
        <Skeleton border="50%" height={32} width={32} />
        <Skeleton width={152} height={24} className={clsSkeleton.username} />
      </HStack>
      <VStack align="stretch">
        <Skeleton height={38} className={clsSkeleton.title} />
        <Skeleton width="91%" height={38} className={clsSkeleton.title} />
        <Skeleton width="78%" height={27} className={clsSkeleton.title} />
        <Skeleton height={420} className={clsSkeleton.img} />
        <VStack gap="6" align="start" className={clsSkeleton.texts}>
          <Skeleton width="91%" height={17} />
          <Skeleton width="85%" height={17} />
          <Skeleton width="95%" height={17} />
        </VStack>
        <Skeleton width={56} height={23} className={clsSkeleton.footer} />
      </VStack>
    </Card>
  )
}
