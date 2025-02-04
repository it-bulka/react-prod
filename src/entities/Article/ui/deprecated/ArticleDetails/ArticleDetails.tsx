import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import CalendarIconDeprecated from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIconDeprecated from '@/shared/assets/icons/eye-20-20.svg'
import {
  Icon as IconDeprecated,
  Text as TextDeprecated, TextAlign,
  TextSize
} from '@/shared/ui'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar/Avatar'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticleDetails.module.scss'

import { getArticleDetailsData } from '../../../model/selectors/articleDetails'
import { renderArticleBlock } from '../../redesigned/renderArticleBlock/renderArticleBlock'

export const ArticleDetails = () => {
  const renderBlock = useCallback(renderArticleBlock, [])
  const article = useSelector(getArticleDetailsData)

  return (
    <>
      <HStack justify="center" max>
        <AvatarDeprecated
          size={200}
          src={article?.img}
          className={cls.avatar}
        />
      </HStack>
      <VStack gap="4" max data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={cls.articleInfo}>
          <IconDeprecated className={cls.icon} Svg={EyeIconDeprecated} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8" className={cls.articleInfo}>
          <IconDeprecated className={cls.icon} Svg={CalendarIconDeprecated} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderBlock)}
    </>
  )
}

export const ArticleDetailsErrorDeprecated = () => {
  const { t } = useTranslation('articles')

  return (
    <TextDeprecated
      align={TextAlign.CENTER}
      title={t('error loading article')}
    />
  )
}

export const ArticleDetailsLoadingDeprecated = () => {
  return (
    <>
      <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </>
  )
}
