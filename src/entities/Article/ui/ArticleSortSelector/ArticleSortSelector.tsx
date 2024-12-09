import { useTranslation } from 'react-i18next'
import { memo, useMemo } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import { SortOrder } from '@/shared/types'
import { SelectOption, Select } from '@/shared/ui/Select/Select'
import { ArticleSortField } from '../../model/const/const'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo(({
  className,
  sort,
  order,
  onChangeOrder,
  onChangeSort
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation('articles')

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
    {
      value: 'asc',
      content: t('asc')
    },
    {
      value: 'desc',
      content: t('desc')
    }
  ]), [t])

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('creation date')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views')
    }
  ], [t])

  return (
    <div className={classnames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort by')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('sort by')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  )
})
