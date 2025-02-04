import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Text as TextDeprecated } from '@/shared/ui'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleTextBlockComponent.module.scss'

import { ArticleTextBlock } from '../../../model/types/articles'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({
  className,
  block
}: ArticleTextBlockComponentProps) => {
  return (
    <div className={classnames('', {}, [className])}>
      {block.title && (
        <ToggleFeaturesComponent
          feature="isAppRedesigned"
          off={<TextDeprecated title={block.title} className={cls.title} />}
          on={<Text title={block.title} className={cls.title} />}
        />
      )}

      {block.paragraphs.map(paragraph => (
        <ToggleFeaturesComponent
          feature="isAppRedesigned"
          off={<TextDeprecated key={paragraph} text={paragraph} className={cls.paragraph} />}
          on={<Text key={paragraph} text={paragraph} className={cls.paragraph} />}
        />
      ))}
    </div>
  )
})

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent'
