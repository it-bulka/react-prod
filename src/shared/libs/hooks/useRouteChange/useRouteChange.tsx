import { useEffect, useState } from 'react'
import { matchPath, useLocation } from 'react-router-dom'

import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig'

const RoutesPatterns: Partial<typeof RoutePath> = RoutePath
delete RoutesPatterns[AppRoutes.NOT_FOUND]

export function useRouteChange() {
  const location = useLocation()
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.HOME)

  useEffect(() => {
    Object.entries(RoutePath).forEach(([route, pattern]) => {
      // to find existed route path
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route as AppRoutes)
      }
    })
  }, [location.pathname])

  return appRoute
}
