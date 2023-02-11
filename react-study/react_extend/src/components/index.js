import React, { Component } from 'react';
// import Demo from './01_setState';
// import Demo2 from './02_lazyLoad';
import { BrowserRouter } from 'react-router-dom';
// import Demo from './03_hooks';
// import Demo from './04_Fragment';
// import Demo from './05_context';
// import Demo from './06_optimize';
// import Demo from './07_renderProps';
// import Demo from './08_ErrorBoundary/Parent';
import Demo from './Text';

export default class index extends Component {
    render() {
        return (
            <div>
                {/* <Demo /> */}
                <hr />
                <BrowserRouter>
                    <Demo />
                </BrowserRouter>
                {/* <Demo /> */}
            </div>
        );
    }
}
