import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='new001'>消息1</NavLink>
                    </li>
                    <li>
                        <NavLink to='new002'>消息1</NavLink>
                    </li>
                    <li>消息1</li>
                    <li>消息1</li>
                    <hr />

                    <Outlet />
                </ul>
            </div>
        );
    }
}

export default Index;
