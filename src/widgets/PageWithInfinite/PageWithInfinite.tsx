import {
  memo, useRef, PropsWithChildren, UIEvent, useEffect
} from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import classnames from '@/shared/libs/classnames/classnames'
import { useInfiniteScroll } from '@/shared/libs/hooks/useInfiniteScroll'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { StateSchema } from '@/app/providers/StoreProvider'
import { getUIScrollByPath, uiActions } from '@/features/UI'
import { useThrottle } from '@/shared/libs/hooks/useThrottle/useThrottle'
import cls from './PageWithInfinite.module.scss'

interface PageProps {
  className?: string
  onScrollEnd?: () => void
}

const THROTTLE_SCROLL_DELAY = 500

export const PageWithInfinite = memo(({
  className,
  children,
  onScrollEnd
}: PropsWithChildren<PageProps>) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLElement>(null)

  const dispatch = useAppDispatch()
  const location = useLocation()
  const scrollPosition = useSelector(
    (state: StateSchema) => getUIScrollByPath(state, location.pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(uiActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: location.pathname
    }))
  }, THROTTLE_SCROLL_DELAY)

  useEffect(() => {
    if(__PROJECT_ENV__ === 'storybook') return
    if(wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition
    }
  }, [])

  return (
    <main
      ref={wrapperRef}
      className={classnames(cls.page, {}, ['page-wrapper', className])}
      onScroll={onScroll}
    >
      {children}
      <div className={cls.trigger} ref={triggerRef} />
    </main>
  )
})

PageWithInfinite.displayName = 'PageWithInfinite'
