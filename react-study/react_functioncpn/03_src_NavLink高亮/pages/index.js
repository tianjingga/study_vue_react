import React from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';

import './index.less';

export default function index() {
    function changeActiveName({ isActive }) {
        console.log(isActive);
        return isActive ? 'activeName' : '';
    }
    return (
        <div className='bigBox'>
            <div className='headerBox'>
                <h1>React Router Dom</h1>
            </div>
            <div className='bottomBox'>
                <div className='leftBox'>
                    <ul>
                        <h3>
                            <NavLink to='/home' className={changeActiveName}>
                                home
                            </NavLink>
                        </h3>
                        <h3>
                            <NavLink to='/about' className={changeActiveName}>
                                about
                            </NavLink>
                        </h3>
                    </ul>
                </div>
                <div className='rightBox'>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/' element={<Navigate to='/about' />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
