import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'

import {
  ArticleListItemDeprecated
} from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import {
  ArticleListItemRedesigned
} from './ArticleListItemRedesigned/ArticleListItemRedesigned'
import { ArticleListItemProps } from './types'

export const ArticleListItem = (props: ArticleListItemProps) => {
  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={<ArticleListItemDeprecated {...props} />}
      on={<ArticleListItemRedesigned {...props} />}
    />
  )
}
