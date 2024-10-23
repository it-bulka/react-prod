import classnames from 'shared/libs/classnames/classnames'
import cls from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
}
// TODO: code component
export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classnames(cls.articleCodeBlockComponent, {}, [className])} />
  )
}
