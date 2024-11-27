import classnames from 'shared/libs/classnames/classnames'
import { memo, useCallback } from 'react'
import { Card, CardTheme } from 'shared/ui'
import { TabItem } from 'shared/ui/Tabs/types'
import cls from './Tabs.module.scss'

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

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
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})
