import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Index() {
    const [sum, setSum] = useState(1);

    return (
        <div>
            <h1>我是Home组件</h1>
            {sum === 2 ? <Navigate to='/about' replace={true}/> : <h3>当前sum的值为{sum}</h3>}
            <button onClick={() => setSum(2)}>点击sum值为2</button>
        </div>
    );
}
