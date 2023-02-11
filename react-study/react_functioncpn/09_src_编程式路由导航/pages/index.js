import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from '../routes';
import Header from '../components/Header';
import './index.less';

export default function Index() {
    // 根据路由表生成对应的路由规则
    const element = useRoutes(routes);
    return (
        <div className='bigBox'>
            <Header />

            <div className='bottomBox'>
                <div className='leftBox'>
                    <ul>
                        <h3>
                            <NavLink to='/home'>home</NavLink>
                        </h3>
                        <h3>
                            <NavLink to='/about'>about</NavLink>
                        </h3>
                    </ul>
                </div>
                {/* 注册路由 */}
                <div className='rightBox'>{element}</div>
            </div>
        </div>
    );
}
