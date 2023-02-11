import { Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';

const routes = [
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/news', element: <News /> },
    { path: '/', element: <Navigate to='/about' /> }
];

export default routes;
