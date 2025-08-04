import { createBrowserRouter } from 'react-router'
import CommonLayout from '../components/common/Layouts/Common'
import Home from '../pages/Home'
import About from '../pages/About'
import Verify from '../pages/Verify'
import Login from '../pages/auth/Login'
import Bind from '../pages/auth/Bind'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <CommonLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'verify',
                element: <Verify />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'bind',
                element: <Bind />
            }
        ]
    }
])

export default appRouter
