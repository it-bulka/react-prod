import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom';
import cls from 'shared/libs/classnames/classnames';
import { useTheme } from 'app/providers';


export const RootPage: FC = () => {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)
  return (
    <div className={cls('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/'}>Home Link</Link>
      <Link to={'about'}>About Link</Link>
      <Outlet/>
    </div>
  );
};