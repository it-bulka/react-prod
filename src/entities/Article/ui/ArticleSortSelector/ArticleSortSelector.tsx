import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import classnames from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/ToggleFeaturesComponent'
import { SortOrder } from '@/shared/types'
import { SelectOption, Select } from '@/shared/ui/deprecated/Select/Select'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text/ui/Text'

import cls from './ArticleSortSelector.module.scss'

import { ArticleSortField } from '../../model/const/const'

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
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
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
      )}
      on={(
        <div
          className={className}
        >
          <VStack gap="8" align="stretch">
            <Text text={t('sort by')} />
            <ListBox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
              fullWidth
            />
            <ListBox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
              fullWidth
            />
          </VStack>
        </div>
      )}
    />
  )
})
