import { useCallback, memo } from 'react'

import CopyIconNew from '@/shared/assets/icons/copy.svg'
import classnames from '@/shared/libs/classnames/classnames'

import cls from './Code.module.scss'

import { Icon } from '../Icon/Icon'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classnames(cls.code, {}, [className])}>
      <Icon
        clickable
        onClick={onCopy}
        className={cls.copyBtn}
        Svg={CopyIconNew}
      />
      <code>{text}</code>
    </pre>
  )
})
