import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import cls from 'shared/libs/classnames/classnames'
import { useTheme } from 'app/providers'
import { NavBar } from 'widgets/NavBar/index'
import { SideBar } from 'widgets/SideBar/ui/SideBar'

export const RootPage: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}
