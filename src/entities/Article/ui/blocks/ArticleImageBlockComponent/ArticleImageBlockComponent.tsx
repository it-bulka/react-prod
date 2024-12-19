import { memo } from 'react'

import classnames from '@/shared/libs/classnames/classnames'
import { Text, TextAlign } from '@/shared/ui'

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
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
})

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent'
