import React from 'react'
import HomeIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.home,
    text: 'main',
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: 'about',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'profile',
    Icon: ProfileIcon,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    text: 'articles',
    Icon: ArticlesIcon,
    authOnly: true
  }
]
