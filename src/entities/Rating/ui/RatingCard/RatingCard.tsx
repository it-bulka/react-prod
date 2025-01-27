import { memo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { useDevice } from '@/shared/libs/hooks/useDevice/useDevice'
import {
 Text, Input, Card , Modal
} from '@/shared/ui'
import { Button, ThemeButton, ButtonSize } from '@/shared/ui/deprecated/Button/Button'
import { Drawer } from '@/shared/ui/deprecated/Drawer/Drawer'
import { StarRating } from '@/shared/ui/deprecated/StarRating/StarRating'
import { VStack, HStack } from '@/shared/ui/redesigned/Stack'

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
    const { t } = useTranslation()
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

    const modalContent = (
      <>
        <Text
          title={feedbackTitle}
        />
        <Input
          value={feedback}
          onChange={setFeedback}
          placeholder={t('your feedback')}
          data-testid="RatingCard.Input"
        />
      </>
    )

    return (
      <Card className={className} max data-testid="RatingCard">
        <VStack align="center" gap="8">
          <Text title={starsCount ? t('thanks for review') : title} />
          <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
        </VStack>
        {
            isMobile ? (
              <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                <VStack gap="32">
                  {modalContent}
                  <Button
                    fullWidth
                    onClick={acceptHandle}
                    size={ButtonSize.L}
                    data-testid="RatingCard.Close"
                  >
                    {t('send')}
                  </Button>
                </VStack>
              </Drawer>
            ) : (
              <Modal isOpen={isModalOpen}>
                <VStack max gap="32">
                  {modalContent}
                  <HStack max gap="16" justify="end">
                    <Button
                      onClick={cancelHandle}
                      theme={ThemeButton.OUTLINE_RED}
                      data-testid="RatingCard.Close"
                    >
                      {t('close')}
                    </Button>
                    <Button onClick={acceptHandle} data-testid="RatingCard.Send">
                      {t('send')}
                    </Button>
                  </HStack>
                </VStack>
              </Modal>
            )
          }
      </Card>
    )
})
