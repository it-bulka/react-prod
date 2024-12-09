import classnames from '@/shared/libs/classnames/classnames'
import { Code } from '@/shared/ui/Code/Code'
import { ArticleCodeBlock } from '@/entities/Article'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classnames(cls.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}
