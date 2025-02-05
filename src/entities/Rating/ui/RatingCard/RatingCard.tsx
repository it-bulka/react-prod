import { memo, useState, useCallback } from 'react'

import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { useDevice } from '@/shared/libs/hooks/useDevice/useDevice'

import { RatingCardDeprecated } from '../deprecated/RatingCardDeprecated'
import { RatingCardRedesigned } from '../redesigned/RatingCardRedesigned'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo(({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  rate = 0
}: RatingCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')
    const isMobile = useDevice()

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (!hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const props = {
      className,
      starsCount,
      title,
      onSelectStars,
      isMobile,
      isModalOpen,
      onModalClose: cancelHandle,
      onSendRating: acceptHandle,
      feedbackTitle,
      feedback,
      onChangeFeedback: setFeedback
    }

    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<RatingCardRedesigned {...props} />}
        off={<RatingCardDeprecated {...props} />}
      />
    )
})
