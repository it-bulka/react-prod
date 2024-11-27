import classnames from 'shared/libs/classnames/classnames'
import { useTranslation } from 'react-i18next'
import { memo, useMemo, useCallback } from 'react'
import { TabItem, Tabs } from 'shared/ui'
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
    <div className={classnames('', {}, [className])}>
      <Tabs
        tabs={typeTabs}
        value={value}
        onTabClick={onTabClick}
        className={className}
      />
    </div>
  )
})
