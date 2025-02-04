import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code/Code'
import { Code } from '@/shared/ui/redesigned/Code/Code'

import cls from './ArticleCodeBlockComponent.module.scss'

import { ArticleCodeBlock } from '../../../model/types/articles'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classnames(cls.articleCodeBlockComponent, {}, [className])}>
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<CodeDeprecated text={block.code} />}
        on={<Code text={block.code} />}
      />
    </div>
  )
}
