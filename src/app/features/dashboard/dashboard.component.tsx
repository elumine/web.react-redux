import { Link, Outlet } from 'react-router'
import { useAppSelector } from '../../hooks'
import { Button } from '@mui/material'
import { logout } from '../auth/auth.slice'
import { useDispatch } from 'react-redux';

export default function Dashboard() {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  return <div className="dark:bg-gray-800">
    dashboard
    <Button onClick={() => dispatch(logout())}>Logout</Button>
    <Outlet />
  </div>
}
