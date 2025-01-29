import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ArticleSortSelector,
  ArticleViewSelector,
  ArticleTypeTabs
} from '@/entities/Article'
import classnames from '@/shared/libs/classnames/classnames'
import { Card as CardDeprecated, Input as InputDeprecated } from '@/shared/ui'

import cls from './ArticlesPageFilters.module.scss'

import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface ArticlesPageFiltersProps {
  className?: string
}

/**
 * @deprecated
 */
export const ArticlesPageFilters = memo(({
  className
}: ArticlesPageFiltersProps) => {
  const { t } = useTranslation()
  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeView,
    view,
    onChangeOrder,
    order
  } = useArticleFilters()

  return (
    <div className={classnames(cls.articlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector
          view={view}
          onViewClick={onChangeView}
        />
      </div>
      <CardDeprecated className={cls.search}>
        <InputDeprecated
          onChange={onChangeSearch}
          value={search}
          placeholder={t('search', { ns: 'translation'})}
          data-testid="ArticlesPageFilters.search"
        />
      </CardDeprecated>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
})
