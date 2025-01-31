import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { getRouteArticleDetails } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import {
  Card as CardDeprecated,
  Icon as IconDeprecated,
  Text as TextDeprecated ,
  Button as ButtonDeprecated,
  ThemeButton,
  AppLink as AppLinkDeprecated
} from '@/shared/ui'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton/Skeleton'
import { AppImage } from '@/shared/ui/redesigned/AppImage'

import cls from './ArticleListItemDeprecated.module.scss'

import { ArticleView, ArticleBlockType } from '../../../model/const/const'
import { ArticleBlock } from '../../../model/types/articles'
import { ArticleTextBlockComponent } from '../../blocks'
import { ArticleListItemProps } from '../types'

export const ArticleListItemDeprecated = memo(({
  className,
  article,
  view,
  target,
  onClick
}: ArticleListItemProps) => {
  const { t } = useTranslation()

  const types = <TextDeprecated text={article.type.join(', ')} className={cls.types} data-testid="ArticleListItem.Type" />
  const views = (
    <>
      <TextDeprecated text={String(article.views)} className={cls.views} />
      <IconDeprecated Svg={EyeIcon} />
    </>
  )

  // console.log("view", view)
  // console.log("cls[view]", cls[view])

  if(view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block: ArticleBlock) => block.type === ArticleBlockType.TEXT
    )
    return (
      <div className={classnames(cls.ArticleListItem, {}, [className, cls[view]])} data-testid="ArticleListItem">
        <CardDeprecated className={cls.card}>
          <div className={cls.header}>
            <AvatarDeprecated size={30} src={article.user?.avatar} />
            <TextDeprecated text={article?.user?.username} className={cls.username} />
            <TextDeprecated text={article.createdAt} className={cls.date} />
          </div>
          <TextDeprecated title={article.title} className={cls.title} />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={<SkeletonDeprecated width="100%" height={250} />}
          />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLinkDeprecated
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <ButtonDeprecated theme={ThemeButton.OUTLINE} onClick={onClick}>
                {t('read more')}
              </ButtonDeprecated>
            </AppLinkDeprecated>
            {views}
          </div>
        </CardDeprecated>
      </div>
    )
  }

  return (
    <AppLinkDeprecated
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classnames(cls.articleListItem, {}, [className, cls[view]])}
      data-testid="ArticleListItem"
    >
      <CardDeprecated className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={<SkeletonDeprecated width={200} height={200} />}
          />
          <TextDeprecated text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <TextDeprecated text={article.title} className={cls.title} />
      </CardDeprecated>
    </AppLinkDeprecated>
  )
})

ArticleListItemDeprecated.displayName = 'ArticleListItemDeprecated'
