import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import HomeIcon from '@/shared/assets/icons/main-20-20.svg'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

export const items = [
  {
    path: RoutePath.home,
    text: 'main',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'about',
    Icon: AboutIcon
  }
]
