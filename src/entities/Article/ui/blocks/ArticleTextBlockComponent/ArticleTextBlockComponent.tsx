import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { Text } from '@/shared/ui'

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
      {block.title && <Text title={block.title} className={cls.title} />}

      {block.paragraphs.map(paragraph => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  )
})

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent'
