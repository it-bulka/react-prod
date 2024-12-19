import { useState, memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './StarRating.module.scss'

import StarIcon from '../../assets/icons/star.svg'
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
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
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
    <div className={classnames(cls.StarRating, {}, [className])}>
      {stars.map(starNumber => (
        <Icon
          className={classnames(
            cls.starIcon,
            { [cls.selected]: isSelected },
            [currentStarsCount && currentStarsCount >= starNumber ? cls.hovered : cls.normal]
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onPointerLeave={onLeave}
          onPointerEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  )
})

StarRating.displayName = 'StarRating'
