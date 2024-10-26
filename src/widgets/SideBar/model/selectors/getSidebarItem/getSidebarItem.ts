import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from 'widgets/SideBar/model/types/items'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg'

export const getSidebarItems = createSelector(
  getUserAuthData,
  userData => {
    const sidebarItemsList: SidebarItemType[] = [
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

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
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
      )
    }

    return sidebarItemsList
  }
)
