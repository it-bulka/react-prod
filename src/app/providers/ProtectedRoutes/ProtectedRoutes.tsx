import { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useLocation , Navigate } from 'react-router'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const ProtectedRoutes = ({ children }:PropsWithChildren) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if(!auth) {
    return <Navigate to={RoutePath.home} replace state={{ from: location }} />
  }

  return children
}
