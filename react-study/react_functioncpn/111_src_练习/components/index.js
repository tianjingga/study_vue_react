import React from 'react';
import Number from './number';
import Todolist from './Todolist';

import './index.less';

const Index = () => {
    return (
        <div className='bigBox'>
            <div>
                <Number />
            </div>
            <div>
                <Todolist />
            </div>
        </div>
    );
};

export default Index;
