import { RefObject, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { VirtuosoGridHandle } from 'react-virtuoso'

// eslint-disable-next-line fsd-checker-gen/layer-imports
import { getScrollTrigger } from '@/features/ScrollToTopButton'

type VirtuosoRef = RefObject<VirtuosoGridHandle>
interface Props {
  virtuosoRef: VirtuosoRef
  virtualization: boolean
}
export const useScrollVirtualizationToTop = ({
  virtuosoRef,
  virtualization
  }: Props) => {
  const scrollTrigger = useSelector(getScrollTrigger)

  const scrollToTopIndex = useCallback((ref: RefObject<VirtuosoGridHandle>) => {
    ref.current?.scrollToIndex({ index: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if(!virtualization) return
    scrollToTopIndex(virtuosoRef)
  }, [scrollTrigger, virtualization, virtuosoRef])
}
