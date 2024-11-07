import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import {
 Card, Icon, Text , Button, ThemeButton, AppLink
} from 'shared/ui'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Article, ArticleView, ArticleBlockType } from '../../model/types/articles'
import cls from './ArticleListItem.module.scss'
import { ArticleTextBlockComponent } from '../blocks'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
  onClick?: () => void
}

export const ArticleListItem = memo(({
  className,
  article,
  view,
  target,
  onClick
}: ArticleListItemProps) => {
  const { t } = useTranslation()

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
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article?.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={RoutePath.article_details + article.id}
            >
              <Button theme={ThemeButton.OUTLINE} onClick={onClick}>
                {t('read more')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classnames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
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
    </AppLink>
  )
})

ArticleListItem.displayName = 'ArticleListItem'
