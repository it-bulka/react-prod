import { RefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions<T extends HTMLElement = HTMLElement> {
  callback?: () => void
  triggerRef: RefObject<T>
  wrapperRef: RefObject<T>
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef
 }:UseInfiniteScrollOptions) => {
  let observer: IntersectionObserver | null = null

  useEffect(() => {
    const triggerEl = triggerRef.current
    const wrapperEl = wrapperRef.current

    if(callback && triggerEl && wrapperEl) {
      const options = {
        root: wrapperEl,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(entries => {
        const entry = entries[0]

        if(entry.isIntersecting) {
          callback?.()
        }
      }, options)

      observer.observe(triggerEl)
    }

    return () => {
      if(observer && triggerEl) {
        observer?.unobserve(triggerEl)
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
