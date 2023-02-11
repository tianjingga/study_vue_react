import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();

    function back() {
        navigate(-1);
    }
    function forword() {
        navigate(1);
    }

    return (
        <div>
            <div className='headerBox'>
                <h1>React Router Dom</h1>
                <button onClick={back}>⬅️后退</button>
                <button onClick={forword}>前进➡️</button>
            </div>
        </div>
    );
};

export default Index;
