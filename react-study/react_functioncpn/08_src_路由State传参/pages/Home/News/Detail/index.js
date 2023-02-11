import React from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
    const { state: { id, title, content }} = useLocation();

    return (
        <div>
            <h2>消息的编号:{id}</h2>
            <h2>消息的题目:{title}</h2>
            <h2>消息的内容:{content}</h2>
        </div>
    );
};

export default Index;
