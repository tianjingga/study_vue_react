import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import './index.scss';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

class Index extends Component {
    render() {
        return (
            <div className='bigBox'>
                <div className='headerBox'>
                    <h1>React Router Dom</h1>
                </div>
                <div className='bottomBox'>
                    <div className='leftBox'>
                        <ul>
                            <li>
                                <NavLink to='/home'>home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>about</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='rightBox'>
                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route path='/home' element={<Home />} />
                                <Route path='/about' element={<About />} />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
