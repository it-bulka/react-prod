import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import { Button, ThemeButton } from '@/shared/ui'

import cls from './ArticleDetailsPageHeader.module.scss'

import { getCanEditArticle } from '../../model/selectors/article/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo(({
  className
}: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation('articles')
  const navigate = useNavigate()
  const canEditArticle = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (!article?.id) return
    navigate(getRouteArticleEdit(article?.id))
  }, [navigate, article?.id])

  return (
    <div className={classnames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {t('back to list')}
      </Button>
      {canEditArticle && (
        <Button
          className={cls.editBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onEditArticle}
        >
          {t('edit', { ns: 'translation'})}
        </Button>
      )}
    </div>
  )
})
