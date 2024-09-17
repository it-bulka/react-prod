import { FC } from 'react'
import classnames from 'shared/libs/classnames/classnames'
import cls from './NotFound.module.scss'

export const NotFound: FC = () => (
  <div className={classnames(cls.NotFoundPage)}>
    Сторінку не зайдено
  </div>
)
