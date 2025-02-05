import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit } from '@/shared/config/routeConfig/routeConfig'
import { Card } from '@/shared/ui/redesigned/Card/Card'

import cls from './AdditionalInfoContainer.module.scss'

import {
  ArticleAdditionalInfo
} from '../ArticleAdditionalInfo/ArticleAdditionalInfo'

export const AdditionalInfoContainer = memo(() => {
  const article = useSelector(getArticleDetailsData)

  const navigate = useNavigate()

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id))
    }
  }, [article, navigate])

  if (!article) {
    return null
  }

  return (
    <Card padding="24" border="round-l" className={cls.card}>
      <ArticleAdditionalInfo
        onEdit={onEditArticle}
        views={article.views}
      />
    </Card>
  )
})
