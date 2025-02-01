import { FC , useEffect , Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { initAuthData , getUserInited } from '@/entities/User'
import { MainLayout } from '@/shared/lauouts/MainLayout'
import cls from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { PageLoader } from '@/shared/ui'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'

export const RootPage: FC = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [])

  // TODO: fix loading on user`s log out
  if (!inited) {
    return <PageLoader />
  }

  return (
    <ToggleFeaturesComponent
      feature="isAppRedesigned"
      off={(
        <div className={cls('app')}>
          <NavBar />
          <div className="content-page">
            <SideBar />
            <Outlet />
          </div>
        </div>
      )}
      on={(
        <div className={cls('app_redesigned')}>
          <Suspense fallback="">
            <MainLayout
              header={<NavBar />}
              content={<Outlet />}
              sidebar={<SideBar />}
            />
          </Suspense>
        </div>
      )}
    />
  )
}
