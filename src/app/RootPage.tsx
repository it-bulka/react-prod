import { FC , useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import cls from '@/shared/libs/classnames/classnames'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'
import { userActions } from '@/entities/User'
import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'

export const RootPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
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
