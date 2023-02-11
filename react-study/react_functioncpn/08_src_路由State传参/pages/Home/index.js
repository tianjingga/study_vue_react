import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Index() {
    return (
        <div>
            <h1>我是Home组件</h1>
            <NavLink to='news'>News</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='message'>Message</NavLink>
            <hr />
            <Outlet />
        </div>
    );
}
