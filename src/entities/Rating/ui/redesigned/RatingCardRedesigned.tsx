import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from '@/shared/ui'
import { Button } from '@/shared/ui/redesigned/Button/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer'
import { Input } from '@/shared/ui/redesigned/Input/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/redesigned/StarRating/StarRating'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './RatingCardRedesigned.module.scss'

interface RatingCardRedesignedProps {
  starsCount: number
  title?: string
  onSelectStars: (starsCount: number) => void
  isMobile: boolean
  isModalOpen: boolean
  onModalClose?: () => void
  onSendRating: () => void
  feedbackTitle?: string
  feedback: string
  onChangeFeedback: (value: string) => void
}
export const RatingCardRedesigned = memo(({
  starsCount,
  title,
  onSelectStars,
  isMobile,
  isModalOpen,
  onModalClose,
  onSendRating,
  feedbackTitle,
  feedback,
  onChangeFeedback
}: RatingCardRedesignedProps) => {
  const { t } = useTranslation()
  const modalContent = (
    <>
      <Text
        title={feedbackTitle}
      />
      <Input
        value={feedback}
        onChange={onChangeFeedback}
        placeholder={t('your feedback')}
        data-testid="RatingCard.Input"
      />
    </>
  )

  return (
    <>
      <VStack align="center" data-testid="RatingCard">
        <Text title={starsCount ? t('thanks for review') : title} size="m" className={cls.title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {
        isMobile ? (
          <Drawer isOpen={isModalOpen} onClose={onModalClose}>
            <VStack gap="32">
              {modalContent}
              <Button
                fullWidth
                onClick={onSendRating}
                size="l"
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
                  onClick={onModalClose}
                  data-testid="RatingCard.Close"
                >
                  {t('close')}
                </Button>
                <Button onClick={onSendRating} data-testid="RatingCard.Send">
                  {t('send')}
                </Button>
              </HStack>
            </VStack>
          </Modal>
        )
      }
    </>
  )
})
