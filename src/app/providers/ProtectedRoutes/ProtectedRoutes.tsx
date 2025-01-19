import { PropsWithChildren, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation , Navigate } from 'react-router'

import { getUserRoles, UserRole, getUserInited } from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface ProtectedRoutesProps {
  roles?: UserRole[]
}

export const ProtectedRoutes = ({ children, roles }:PropsWithChildren<ProtectedRoutesProps>) => {
  const isAutorized = useSelector(getUserInited)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if(!roles) return true

    return roles.some(requiredRole => {
      const hasRole = userRoles?.includes(requiredRole)
      return hasRole
    })
  }, [roles, userRoles])

  if(!isAutorized) {
    return <Navigate to={RoutePath.home} replace state={{ from: location }} />
  }

  if(!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} replace state={{ from: location }} />
  }

  return children
}
