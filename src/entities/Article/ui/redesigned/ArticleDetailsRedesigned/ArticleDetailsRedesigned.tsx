import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Avatar } from '@/shared/ui/redesigned/Avatar/Avatar'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import cls from './ArticleDetailsRedesigned.module.scss'

import { getArticleDetailsData } from '../../../model/selectors/articleDetails'
import { renderArticleBlock } from '../renderArticleBlock/renderArticleBlock'

export const ArticleDetailsRedesigned = () => {
  const article = useSelector(getArticleDetailsData)
  const renderBlock = useCallback(renderArticleBlock, [])

  return (
    <VStack gap="8" align="stretch">
      <HStack gap="8">
        <Avatar src={article?.user.avatar} size={32} />
        <Text text={article?.user.username} bold />
        <Text text={article?.createdAt} />
      </HStack>
      <VStack gap="16" align="stretch">
        <Text title={article?.title} size="l" bold />
        <Text title={article?.subtitle} size="m" />
        <AppImage
          fallback={<Skeleton width="100%" height={420} border="16px" />}
          src={article?.img}
          className={cls.img}
        />
        {article?.blocks.map(renderBlock)}
      </VStack>
    </VStack>
  )
}

export const ArticleDetailsError = () => {
  const { t } = useTranslation('articles')

  return (
    <Text
      align="center"
      title={t('error loading article')}
    />
  )
}

export const ArticleDetailsLoading = () => {
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
