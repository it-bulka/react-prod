import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleImageBlockComponent.module.scss'

import { ArticleImageBlock } from '../../../model/types/articles'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({
  className,
  block
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={classnames('', {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <ToggleFeaturesComponent
          feature="isAppRedesigned"
          off={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
          on={<Text text={block.title} align="center" />}
        />
      )}
    </div>
  )
})

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent'
