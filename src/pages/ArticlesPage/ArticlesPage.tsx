import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
    <div className={classnames(cls.ArticlesPage, {}, [className])} />
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
