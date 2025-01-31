import { HTMLAttributeAnchorTarget } from 'react'

import { ArticleView } from '../../model/const/const'
import { Article } from '../../model/types/articles'

export interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
  onClick?: () => void
}
