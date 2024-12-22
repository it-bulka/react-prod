import { useRef, useCallback } from 'react'

/**
 * A custom hook that debounces a function call.
 *
 * This hook returns a debounced version of the provided callback function that will only
 * be called after the specified delay has passed since the last invocation.
 *
 * @template T - The type of the callback function.
 *
 * @param {T} cb - The callback function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 *
 * @returns {T} A debounced version of the provided callback function.
 *
 * @example
 * const debouncedSearch = useDebounce((searchTerm) => {
 *   console.log(searchTerm);
 * }, 300);
 *
 * // The `debouncedSearch` function can now be called frequently,
 * // but it will only execute the `console.log` after 300ms delay.
 */

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
