import { memo, useCallback } from 'react'

import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import classnames from '@/shared/libs/classnames/classnames'
import { Button, ThemeButton, Icon } from '@/shared/ui'

import cls from './ArticleViewSelector.module.scss'

import { ArticleView } from '../../model/const/const'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon
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
    <div className={classnames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(item => (
        <Button
          theme={ThemeButton.CLEAR}
          onClick={() => onClick(item.view)}
          key={item.view}
        >
          <Icon
            Svg={item.icon}
            className={classnames('', { [cls.notSelected]: item.view !== view })}
          />
        </Button>
      ))}
    </div>
  )
})
