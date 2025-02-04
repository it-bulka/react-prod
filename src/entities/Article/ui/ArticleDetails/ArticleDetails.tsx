import { useEffect, memo } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import classnames from '@/shared/libs/classnames/classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { VStack } from '@/shared/ui/redesigned/Stack'

import {
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import {
  ArticleDetails as ArticleDetailsDeprecated,
  ArticleDetailsErrorDeprecated,
  ArticleDetailsLoadingDeprecated
} from '../deprecated/ArticleDetails/ArticleDetails'
import cls from '../deprecated/ArticleDetails/ArticleDetails.module.scss'
import {
  ArticleDetailsLoading,
  ArticleDetailsRedesigned,
  ArticleDetailsError
} from '../redesigned/ArticleDetailsRedesigned/ArticleDetailsRedesigned'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  const error = useSelector(getArticleDetailsError)
  const isLoading = useSelector(getArticleDetailsIsLoading)

  useEffect(() => {
    if (__PROJECT_ENV__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content = null

  if (isLoading) {
    content = (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<ArticleDetailsLoading />}
        off={<ArticleDetailsLoadingDeprecated />}
      />
    )
  } else if (error) {
    content = (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<ArticleDetailsError />}
        off={<ArticleDetailsErrorDeprecated />}
      />
    )
  } else {
    content = (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<ArticleDetailsDeprecated />}
        on={<ArticleDetailsRedesigned />}
      />
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="16" max className={classnames(cls.articleDetails, {}, [className])} align="stretch">
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
})

ArticleDetails.displayName = 'ArticleDetails'
