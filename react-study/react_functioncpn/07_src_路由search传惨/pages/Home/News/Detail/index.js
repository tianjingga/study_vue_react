import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
    const [data, setData] = useSearchParams();
    const id = data.get('id');
    const title = data.get('title');
    const content = data.get('content');

    return (
        <div>
            <h2>消息的编号:{id}</h2>
            <h2>消息的题目:{title}</h2>
            <h2>消息的内容:{content}</h2>
            <button onClick={() => setData('id=008&title=嘻嘻&content=haha')}>点击修改接收到的search参数</button>
        </div>
    );
};

export default Index;
