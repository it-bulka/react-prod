import { memo, ReactNode, useCallback } from 'react'

import classnames from '@/shared/libs/classnames/classnames'

import cls from './Tabs.module.scss'

import { Card } from '../Card/Card'
import { Flex, FlexDirection } from '../Stack/Flex/Flex'

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
  fullWidth?: boolean
}

export const Tabs = memo(({
  className,
  tabs,
  onTabClick,
  value,
  direction = 'row',
  fullWidth = false
}: TabsProps) => {
  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab)
    },
    [onTabClick]
  )

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classnames(cls.tabs, {}, [className])}
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value
        return (
          <Card
            variant={isSelected ? 'light' : 'outlined'}
            className={classnames(cls.tab, {
              [cls.selected]: isSelected
            })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="round-l"
            max={fullWidth}
          >
            {tab.content}
          </Card>
        )
      })}
    </Flex>
  )
})
