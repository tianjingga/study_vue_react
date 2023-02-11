import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import Loading from './Loading';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
export default class index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/' element={<Navigate to='/about' />}></Route>
                    </Routes>
                </Suspense>
            </div>
        );
    }
}
