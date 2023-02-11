import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from '../routes';
import './index.less';

const Index = () => {
    // 根据路由表生成对应的路由规则
    const element = useRoutes(routes);
    return (
        <div className='box'>
            <div className='header'>
                <h1>路由组件的练习</h1>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <ul>
                        <li>
                            <NavLink to='/home'>首页</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>关于</NavLink>
                        </li>
                        <li>
                            <NavLink to='/news'>新闻</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='right'>{element}</div>
            </div>
        </div>
    );
};

export default Index;
