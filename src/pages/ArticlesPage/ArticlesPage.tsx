/* eslint-disable i18next/no-literal-string */
import classnames from 'shared/libs/classnames/classnames'
import { memo } from 'react'
import { AppLink } from 'shared/ui'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  return (
    <div className={classnames(cls.ArticlesPage, {}, [className])}>
      <AppLink to="/articles/1">Стаття 1</AppLink>
    </div>
  )
})

ArticlesPage.displayName = 'ArticlesPage'

export default ArticlesPage
