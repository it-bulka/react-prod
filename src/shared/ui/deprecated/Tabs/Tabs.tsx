import { memo, useCallback } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Tabs.module.scss'

import { TabItem } from './types'
import { Card, CardTheme } from '../Card/Card'

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

/**
 * @deprecated
 */
export const Tabs = memo(({
  className,
  tabs,
  value,
  onTabClick
}: TabsProps) => {
  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab)
  }, [onTabClick])

  return (
    <div className={classnames(cls.tabs, {}, [className])}>
      {tabs.map(tab => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
          data-testid={`Tab.${tab.value}`}
          data-selected={tab.value === value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
