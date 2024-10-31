import { useRef, useCallback } from 'react'

export function useDebounce<T extends (...args: any[]) => void>(cb: T, delay: number) {
  const timerId = useRef<NodeJS.Timeout | null>(null)

  return useCallback((...args: Parameters<T>) => {
    if(timerId.current) {
      clearTimeout(timerId.current)
    }

    timerId.current = setTimeout(() => {
      cb(...args)
    }, delay)
  }, [cb, delay])
}
