import { ReactElement } from 'react'

// eslint-disable-next-line fsd-checker-gen/layer-imports
import { ScrollToolbar } from '@/widgets/ScrollToolbar'

import { AppRoutes } from '../../../config/routeConfig/routeConfig'
import { useRouteChange } from '../useRouteChange/useRouteChange'

export function useAppToolbar() {
  const appRoute = useRouteChange()

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar action="virtualization" />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar action="window" />
  }

  return toolbarByAppRoute[appRoute]
}
