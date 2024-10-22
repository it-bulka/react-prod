import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  return (
    <div className={classnames(cls.ArticleDetailsPage, {}, [className])} />
  )
})

ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
