import { memo } from 'react'
import { useParams } from 'react-router'

import { DynamicModuleLoader, ReducersList } from '@/shared/libs/components/DynamicModalLoader'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import { articleDetailsPageReducer } from '../../model/slice'
import {
  ArticleDetailsPageDeprecated, ArticleDetailsPageNotFountDeprecated
} from '../deprecated/ArticleDetailsPageDeprecated'
import {
  ArticleDetailsNotFound
} from '../redesigned/ArticleDetailsNotFound/ArticleDetailsNotFound'
import {
  ArticleDetailsPageRedesigned
} from '../redesigned/ArticleDetailsPageRedesigned/ArticleDetailsPageRedesigned'

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(() => {
  const params = useParams<{ id: string }>()

  if(!params.id) {
    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        on={<ArticleDetailsNotFound />}
        off={<ArticleDetailsPageNotFountDeprecated />}
      />
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<ArticleDetailsPageDeprecated id={params.id} />}
        on={<ArticleDetailsPageRedesigned id={params.id} />}
      />
    </DynamicModuleLoader>
  )
})

ArticleDetailsPage.displayName = 'ArticleDetailsPage'

export default ArticleDetailsPage
