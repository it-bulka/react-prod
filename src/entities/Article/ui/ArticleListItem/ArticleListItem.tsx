import { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { getRouteArticleDetails } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import {
 Card, Icon, Text , Button, ThemeButton, AppLink
} from '@/shared/ui'
import { AppImage } from '@/shared/ui/AppImage'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import cls from './ArticleListItem.module.scss'

import { ArticleView, ArticleBlockType } from '../../model/const/const'
import { Article } from '../../model/types/articles'
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

  const types = <Text text={article.type.join(', ')} className={cls.types} data-testid="ArticleListItem.Type" />
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if(view === ArticleView.BIG) {
    const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT)

    return (
      <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])} data-testid="ArticleListItem">
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user?.avatar} />
            <Text text={article?.user?.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
          />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
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
      to={getRouteArticleDetails(article.id)}
      className={classnames(cls.articleListItem, {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={<Skeleton width={200} height={200} />}
          />
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
