import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// 二级理由
import News from '../pages/Home/News';
import Message from '../pages/Home/Message';
import Detail from '../pages/Home/News/Detail';
const routes = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />,
                children: [{ path: 'detail/:id/:title/:content', element: <Detail /> }]
            },
            { path: 'message', element: <Message /> }
        ]
    },
    { path: '/about', element: <About /> },
    { path: '/', element: <Navigate to='/about' /> }
];
export default routes;
