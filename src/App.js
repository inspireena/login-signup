import './App.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Dashboard from './Component/Dashboard';
import HomePage from './Component/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path : '*',
      element : <Navigate to= '/dashboard'/>
    }

  ])

  return (
    <RouterProvider router={router} />
  )

}
export default App;