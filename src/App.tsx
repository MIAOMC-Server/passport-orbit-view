import { RouterProvider } from 'react-router-dom'
import appRouter from './routers/Router'
import './App.css'

const App = () => {
    return <RouterProvider router={appRouter} />
}

export default App
