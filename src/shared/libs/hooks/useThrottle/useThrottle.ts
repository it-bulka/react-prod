import { useCallback, useRef } from 'react'

export const useThrottle = (cb: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef<boolean>(false)
  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const throttleFn = useCallback((...args: any[]) => {
    if(!throttleRef.current) {
      cb(...args)
      throttleRef.current = true
      if(timeoutId.current) {
        clearTimeout(timeoutId.current)
      }

      timeoutId.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [cb, delay])

  return throttleFn
}
