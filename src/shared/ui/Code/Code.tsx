import { useCallback, memo } from 'react'
import classnames from '@/shared/libs/classnames/classnames'
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg'
import { Button, ThemeButton } from '@/shared/ui'
import cls from './Code.module.scss'

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
      <Button onClick={onCopy} className={cls.copyBtn} theme={ThemeButton.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>

      <code>
        {text}
      </code>
    </pre>
  )
})
