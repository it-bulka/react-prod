import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Button as ButtonDeprecated,
  Card as CardDeprecated, Input as InputDeprecated,
  Modal,
  Text as TextDeprecated,
  ThemeButton
} from '@/shared/ui'
import { ButtonSize } from '@/shared/ui/deprecated/Button/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StarRating } from '@/shared/ui/redesigned/StarRating/StarRating'

interface RatingCardDeprecatedProps {
  className?: string
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
export const RatingCardDeprecated = memo(({
  className,
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
}: RatingCardDeprecatedProps) => {
  const { t } = useTranslation()
  const modalContent = (
    <>
      <TextDeprecated
        title={feedbackTitle}
      />
      <InputDeprecated
        value={feedback}
        onChange={onChangeFeedback}
        placeholder={t('your feedback')}
        data-testid="RatingCard.Input"
      />
    </>
  )

  return (
    <CardDeprecated className={className} max data-testid="RatingCard">
      <VStack align="center" gap="8">
        <TextDeprecated title={starsCount ? t('thanks for review') : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      {
        isMobile ? (
          <Drawer isOpen={isModalOpen} onClose={onModalClose}>
            <VStack gap="32">
              {modalContent}
              <ButtonDeprecated
                fullWidth
                onClick={onSendRating}
                size={ButtonSize.L}
                data-testid="RatingCard.Close"
              >
                {t('send')}
              </ButtonDeprecated>
            </VStack>
          </Drawer>
        ) : (
          <Modal isOpen={isModalOpen}>
            <VStack max gap="32">
              {modalContent}
              <HStack max gap="16" justify="end">
                <ButtonDeprecated
                  onClick={onModalClose}
                  theme={ThemeButton.OUTLINE_RED}
                  data-testid="RatingCard.Close"
                >
                  {t('close')}
                </ButtonDeprecated>
                <ButtonDeprecated onClick={onSendRating} data-testid="RatingCard.Send">
                  {t('send')}
                </ButtonDeprecated>
              </HStack>
            </VStack>
          </Modal>
        )
      }
    </CardDeprecated>
  )
})
