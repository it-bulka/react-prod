import { memo, useCallback } from 'react'

import ListIcon from '@/shared/assets/icons/burger.svg'
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tile.svg'
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg'
import classnames from '@/shared/libs/classnames/classnames'
import { toggleFeatures } from '@/shared/libs/features/toggleFeatures'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { Button as ButtonDeprecated, Icon as IconDeprecated, ThemeButton } from '@/shared/ui'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'
import { HStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleViewSelector.module.scss'

import { ArticleView } from '../../../entities/Article/model/const/const'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated
    })
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated
    })
  }
]

export const ArticleViewSelector = memo(({
  className,
  onViewClick,
  view
}: ArticleViewSelectorProps) => {
  const onClick = useCallback((viewType: ArticleView) => {
    onViewClick?.(viewType)
  }, [onViewClick])

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      on={(
        <Card
          className={classnames(
            cls.ArticleViewSelectorRedesigned,
            {},
            [className]
          )}
          border="round-l"
        >
          <HStack gap="8">
            {viewTypes.map(viewType => (
              <Icon
                clickable
                onClick={() => onClick(viewType.view)}
                Svg={viewType.icon}
                className={classnames('', {
                  [cls.notSelected]: viewType.view !== view
                })}
              />
            ))}
          </HStack>
        </Card>
      )}
      off={(
        <div className={classnames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map(item => (
            <ButtonDeprecated
              theme={ThemeButton.CLEAR}
              onClick={() => onClick(item.view)}
              key={item.view}
            >
              <IconDeprecated
                Svg={item.icon}
                className={classnames('', { [cls.notSelected]: item.view !== view })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      )}
    />
  )
})
