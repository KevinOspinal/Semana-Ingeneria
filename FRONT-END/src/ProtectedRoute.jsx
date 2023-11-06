import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './Context/AuthContext'

export default function ProtectedRoute() {
  const { user, isAuthenticated, isAuthenticatedLogin, loading, isLogin } = useAuth()
  console.log(loading, isLogin)

  if(loading) return <h1>Loading...</h1>
  if(!loading && !isLogin) return <Navigate to='/' replace/>

  return <Outlet/>
}
