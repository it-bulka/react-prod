import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({
  className
}: ArticleEditPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{id: string}>()
  const isEdit = Boolean(id)

  return (
    <div className={classnames(cls.articleEditPage, {}, [className])}>
      {isEdit
        ? t('edit page') + id
        : t('new page')}
    </div>
  )
})

export default ArticleEditPage
