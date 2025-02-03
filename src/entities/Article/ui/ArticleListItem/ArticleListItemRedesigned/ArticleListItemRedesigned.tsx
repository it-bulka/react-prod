import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/config/routeConfig/routeConfig'
import classnames from '@/shared/libs/classnames/classnames'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { Button } from '@/shared/ui/redesigned/Button/Button'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Icon } from '@/shared/ui/redesigned/Icon/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleListItemRedesigned.module.scss'

import {
  ArticleBlockType,
  ArticleView
} from '../../../model/const/const'
import { ArticleTextBlock } from '../../../model/types/articles'
import { ArticleListItemProps } from '../types'

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const {
 className, article, view, target
} = props
  const { t } = useTranslation()
console.log('article.user', article.user)
  const views = (
    <HStack gap="8">
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} className={cls.views} size="s" />
    </HStack>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
      <Card
        padding="24"
        max
        data-testid="ArticleListItem"
        className={classnames(cls.ArticleListItem, {}, [
          className,
          cls[view]
        ])}
      >
        <HStack gap="8" max className={cls.heading}>
          {/* <Avatar size={32} src={article.user?.avatar} /> */}
          <Text semiBold text={article.user?.username} size="s" />
          <Text text={article.createdAt} size="s" />
        </HStack>
        <VStack max gap="16" align="stretch">
          <Text title={article.title} bold size="l" />
          <Text title={article.subtitle} size="m" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              size="s"
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack max justify="between">
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.id)}
            >
              <Button variant="outline">
                {t('read more')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </VStack>
      </Card>
    )
  }

  return (
    <AppLink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classnames(cls.SMALL, {}, [
        className,
        cls[view]
      ])}
    >
      <Card className={cls.card} border="round-l" padding="0">
        <AppImage
          fallback={<Skeleton height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text title={article.title} size="m" className={cls.title} />
          <VStack gap="4" className={cls.footer} max>
            <HStack justify="between" max>
              <Text
                text={article.createdAt}
                size="s"
              />
              {views}
            </HStack>
            <HStack gap="4" className={cls.userInfo} justify="start" max>
              <Avatar size={32} src={article.user?.avatar} />
              <Text text={article.user?.username} semiBold size="s" />
            </HStack>
          </VStack>
        </VStack>
      </Card>
    </AppLink>
  )
})
