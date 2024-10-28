import classnames from 'shared/libs/classnames/classnames'
import { memo, useRef, PropsWithChildren } from 'react'
import { useInfiniteScroll } from 'shared/libs/hooks/useInfiniteScroll'
import cls from './PageWithInfinite.module.scss'

interface PageProps {
  className?: string
  onScrollEnd?: () => void
}

export const PageWithInfinite = memo(({
  className,
  children,
  onScrollEnd
}: PropsWithChildren<PageProps>) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLElement>(null)

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
    <section
      ref={wrapperRef}
      className={classnames(cls.page, {}, ['page-wrapper', className])}
    >
      {children}
      <div className={cls.trigger} ref={triggerRef} />
    </section>
  )
})

PageWithInfinite.displayName = 'PageWithInfinite'
