import { useState, memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { toggleFeatures } from '@/shared/libs/features/lib/toggleFeatures'

import cls from './StarRating.module.scss'

import StarIcon from '../../../assets/icons/star.svg'
import { Icon as IconDeprecated } from '../../deprecated/Icon/Icon'
import { Icon } from '../Icon/Icon'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo(({
  className, onSelect, selectedStars, size
}: StarRatingProps) => {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars || 0)
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount)
      setCurrentStarsCount(starsCount)
      setIsSelected(true)
    }
  }

  return (
    <div className={classnames(
      toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.StarRating,
        on: () => cls.StarRatingRedesigned
      }),
      {},
      [className]
    )}
    >
      {stars.map(starNumber => {
        const commonProps = {
          className: classnames(
              cls.starIcon,
              { [cls.selected]: isSelected },
              [currentStarsCount && currentStarsCount >= starNumber ? cls.hovered : cls.normal]
            ),
        Svg: StarIcon,
        key: starNumber,
        width: size,
        height: size,
        onPointerLeave: onLeave,
        onPointerEnter: onHover(starNumber),
        onClick: onClick(starNumber),
        'data-testid': `StarRating.${starNumber}`,
        'data-selected': currentStarsCount >= starNumber
        }
        return (
          <ToggleFeaturesComponent
            feature="isAppRedesigned"
            on={<Icon {...commonProps} />}
            off={<IconDeprecated {...commonProps} />}
          />

        )
      })}
    </div>
  )
})

StarRating.displayName = 'StarRating'
