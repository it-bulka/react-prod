import { ArticleBlockType } from '../../../model/const/const'
import { ArticleBlock } from '../../../model/types/articles'
import {
  ArticleCodeBlockComponent,
  ArticleImageBlockComponent,
  ArticleTextBlockComponent
} from '../../blocks'

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
        />
      )
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
        />
      )
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
        />
      )
    default:
      return null
  }
}
