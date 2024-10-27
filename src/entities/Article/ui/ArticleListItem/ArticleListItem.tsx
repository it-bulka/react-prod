import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import {
 Card, Icon, Text , Button, ThemeButton
} from 'shared/ui'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { useNavigate } from 'react-router'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Article, ArticleView, ArticleBlockType } from '../../model/types/articles'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../blocks'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo(({
  className,
  article,
  view
}: ArticleListItemProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id)
  }, [article.id, navigate])

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if(view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT)

    return (
      <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              {t('read more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classnames(cls.articleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card} onClick={onOpenArticle}>
        <div className={cls.imageWrapper}>
          <img alt={article.title} src={article.img} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  )
})

ArticleListItem.displayName = 'ArticleListItem'
