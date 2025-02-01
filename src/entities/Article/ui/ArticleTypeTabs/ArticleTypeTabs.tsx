import { memo, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui'
import { Tabs } from '@/shared/ui/redesigned/Tabs/Tabs'

import { ArticleType } from '../../model/const/const'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType;
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo(({
  className,
  value,
  onChangeType
}: ArticleTypeTabsProps) => {
  const { t } = useTranslation('articles')

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('all')
    },
    {
      value: ArticleType.IT,
      content: t('it')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economic')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science')
    }
  ], [t])

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
        <TabsDeprecated
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={className}
        />
      )}
      on={(
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={className}
          fullWidth
        />
      )}
    />
  )
})
