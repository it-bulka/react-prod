import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div>
      <Link to={'about'}>About Link</Link>
      HomePage
      <Outlet />
    </div>
  )
}

export default Home