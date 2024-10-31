import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { memo, useMemo, useCallback } from 'react'
import { ArticleSortField } from 'entities/Article'
import { SortOrder } from 'shared/types'
import { SelectOption, Select } from 'shared/ui/Select/Select'
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

  const orderOptions = useMemo<SelectOption[]>(() => ([
    {
      value: 'asc',
      content: t('asc')
    },
    {
      value: 'desc',
      content: t('desc')
    }
  ]), [t])

  const sortFieldOptions = useMemo<SelectOption[]>(() => [
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

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
    <div className={classnames(cls.articleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort by')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        label={t('sort by')}
        value={order}
        onChange={changeOrderHandler}
        className={cls.order}
      />
    </div>
  )
})