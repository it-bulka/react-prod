import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import {
 ArticleSortField, ArticleType, ArticleTypeTabs, ArticleSortSelector
} from '@/entities/Article'
import classnames from '@/shared/libs/classnames/classnames'
import { SortOrder } from '@/shared/types'
import { Card } from '@/shared/ui/redesigned/Card/Card'
import { Input } from '@/shared/ui/redesigned/Input/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'

import cls from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type
  } = props
  const { t } = useTranslation()

  return (
    <Card
      className={classnames(cls.ArticlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32" align="stretch">
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('Поиск')}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  )
})
