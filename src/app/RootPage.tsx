import { FC , useEffect , Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/app/providers/StoreProvider/config/store'
import { initAuthData , getUserInited } from '@/entities/User'
import { AppLoaderLayout } from '@/shared/lauouts/AppLoaderLayout/AppLoaderLayout'
import { MainLayout } from '@/shared/lauouts/MainLayout'
import cls from '@/shared/libs/classnames/classnames'
import { ToggleFeaturesComponent } from '@/shared/libs/features/components/ToggleFeaturesComponent'
import { useAppToolbar } from '@/shared/libs/hooks/useAppToolbar/useAppToolbar'
import { PageLoader } from '@/shared/ui'
import { NavBar } from '@/widgets/NavBar'
import { SideBar } from '@/widgets/SideBar'

export const RootPage: FC = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)
  const toolbar = useAppToolbar()

  useEffect(() => {
    dispatch(initAuthData())
  }, [])

  // TODO: fix loading on user`s log out
  if (!inited) {
    return (
      <ToggleFeaturesComponent
        feature="isAppRedesigned"
        off={<PageLoader />}
        on={<AppLoaderLayout />}
      />
    )
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
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      )}
    />
  )
}
