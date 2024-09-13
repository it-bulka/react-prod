import { type FC } from 'react'
import cls from './PageLoader.module.scss'
import classnames from 'shared/libs/classnames/classnames';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/ui/Loader';

interface PageLoaderProps {
  className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  const { t } = useTranslation()
  
  return (
    <div className={classnames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
