import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Index() {
    const [news] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午' },
        { id: '002', title: '消息2', content: '汗滴禾下土' },
        { id: '003', title: '消息3', content: '谁知盘中餐' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦' }
    ]);

    const navigate = useNavigate();

    function showDetail(newObj) {
        console.log(newObj);
        navigate('detail', {
            replace: false,
            state: {
                id: newObj.id,
                title: newObj.title,
                content: newObj.content
            }
        });
    }

    return (
        <div>
            <ul>
                {news.map((newObj) => {
                    return (
                        // 路由连接
                        <li key={newObj.id}>
                            <Link to='detail' state={{ id: newObj.id, title: newObj.title, content: newObj.content }}>
                                {newObj.title}
                            </Link>
                            <button onClick={() => showDetail(newObj)}>查看详情</button>
                        </li>
                    );
                })}
            </ul>
            <hr />
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    );
}
