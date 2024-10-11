import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import cls from 'shared/libs/classnames/classnames'
import { NavBar } from 'widgets/NavBar/index'
import { SideBar } from 'widgets/SideBar/ui/SideBar'

export const RootPage: FC = () => {
  return (
    <div className={cls('app')}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}
