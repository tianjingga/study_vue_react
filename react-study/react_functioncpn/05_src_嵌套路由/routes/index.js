import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// 二级理由
import News from '../pages/Home/News';
import Message from '../pages/Home/Message';
// 三级路由
import News001 from '../pages/Home/News/New001';
import News002 from '../pages/Home/News/New002';
const routes = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />,
                children: [
                    { path: 'new001', element: <News001 /> },
                    { path: 'new002', element: <News002 /> }
                ]
            },
            { path: 'message', element: <Message /> }
        ]
    },
    { path: '/about', element: <About /> },
    { path: '/', element: <Navigate to='/about' /> }
];
export default routes;
