import { FC , useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { initAuthData } from '@/entities/User'
import cls from '@/shared/libs/classnames/classnames'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'

export const RootPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initAuthData())
  }, [])

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
