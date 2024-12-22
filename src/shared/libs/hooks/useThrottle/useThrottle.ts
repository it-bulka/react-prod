import { useCallback, useRef } from 'react'

/**
 * A hook that implements a throttle mechanism for the `cb` function.
 * Throttling limits the frequency of function calls so that the function
 * is executed no more than once in the specified number of milliseconds.
 *
 * @param {(...args: any[]) => void} cb The function to be throttled.
 * @param {number} delay The delay between function calls in milliseconds.
 * @returns {(...args: any[]) => void} A memoized function that invokes `cb` with throttling.
 *
 * @example
 * const throttledFunction = useThrottle((message) => {
 *   console.log(message);
 * }, 1000);
 *
 * // Call the throttled function without exceeding the rate limit
 * throttledFunction("Hello");
 */

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
