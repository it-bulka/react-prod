export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/not-found'
}
