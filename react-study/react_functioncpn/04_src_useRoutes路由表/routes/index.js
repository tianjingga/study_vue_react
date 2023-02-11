import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
const routes = [
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/', element: <Navigate to='/about' /> }
];
export default routes;
