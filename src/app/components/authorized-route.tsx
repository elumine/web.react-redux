import { Link, Outlet } from 'react-router'
import { useAppSelector } from '../hooks'

export default function AuthorizedRoute() {
  const authState = useAppSelector((state) => state.auth)
  if (!authState.token) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <Link to='/auth/login'>Login</Link> to gain access
        </span>
      </div>
    )
  }
  return <Outlet />
}
