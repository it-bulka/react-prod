import { useCallback , useEffect, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { Text, TextAlign, TextSize } from '@/shared/ui'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'

import cls from './ArticleDetails.module.scss'

import { ArticleBlockType } from '../../model/const/const'
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
  getArticleDetailsData
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock } from '../../model/types/articles'
import {
  ArticleCodeBlockComponent,
  ArticleImageBlockComponent,
  ArticleTextBlockComponent
} from '../blocks'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const error = useSelector(getArticleDetailsError)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const data = useSelector(getArticleDetailsData)

  useEffect(() => {
    if (__PROJECT_ENV__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        )
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        )
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={cls.block}
            block={block}
          />
        )
      default:
        return null
    }
  }, [])

  let content = null

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('error loading article')}
      />
    )
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar
            size={200}
            src={data?.img}
            className={cls.avatar}
          />
        </HStack>
        <VStack gap="4" max>
          <Text
            className={cls.title}
            title={data?.title}
            text={data?.subtitle}
            size={TextSize.L}
          />
          <HStack gap="8" className={cls.articleInfo}>
            <Icon className={cls.icon} Svg={EyeIcon} />
            <Text text={String(data?.views)} />
          </HStack>
          <HStack gap="8" className={cls.articleInfo}>
            <Icon className={cls.icon} Svg={CalendarIcon} />
            <Text text={data?.createdAt} />
          </HStack>
        </VStack>
        {data?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="16" max className={classnames(cls.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
