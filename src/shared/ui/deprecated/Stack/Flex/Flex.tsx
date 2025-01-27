import {
 ReactNode, memo, HTMLAttributes
} from 'react'

import classnames, { Mods } from '@/shared/libs/classnames/classnames'

import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '32'

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

type DivProps = HTMLAttributes<HTMLDivElement>

export interface FlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

/**
 * @deprecated
 */
export const Flex = memo(({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max = false,
  ...rest
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: max
  }
  return (
    <div className={classnames(cls.flex, mods, classes)} {...rest}>
      {children}
    </div>
  )
})

Flex.displayName = 'Flex'
