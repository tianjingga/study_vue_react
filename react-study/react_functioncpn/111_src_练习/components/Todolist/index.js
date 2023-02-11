import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';

import './index.less';
const Index = () => {
    const listContext = useRef();

    const [listArr, setListArr] = useState([
        { id: '001', item: '瘦十斤', flag: false },
        { id: '002', item: '挣一千万', flag: true },
        { id: '003', item: '耍朋友', flag: true },
        { id: '004', item: '买房子', flag: false },
        { id: '005', item: '换手机', flag: true }
    ]);

    function addList() {
        const listObj = listContext.current.value;

        if (listObj.trim() !== '') {
            const newListObj = { id: nanoid(), item: listObj, flag: false };
            setListArr([newListObj, ...listArr]);
            // 清空输入框
            listContext.current.value = '';
        } else {
            alert('输入内容不能为空');
        }
    }
    // 点击完成的按钮
    function finishBtn(id) {
        let newList = listArr.map((listObj) => {
            if (listObj.id === id) {
                listObj.flag = !listObj.flag;
                return listObj;
            } else {
                return listObj;
            }
        });

        setListArr(newList);
    }

    // 点击删除的按钮
    function deleteBtn(id) {
        let newList = listArr.filter((listObj) => {
            return listObj.id !== id;
        });
        setListArr(newList);
    }

    // 展示全部
    function all() {
        let newList = listArr.map((listObj) => {
            return listObj;
        });
        setListArr(newList);
    }

    // 展示已完成
    function allFinish() {
        let newList = listArr.filter((listObj) => {
            return listObj.flag === true;
        });
        setListArr(newList);
    }

    // 展示未完成
    function allUnFinish() {
        let newList = listArr.filter((listObj) => {
            return listObj.flag === false;
        });
        setListArr(newList);
    }

    return (
        <div className='todolistBox'>
            <div className='headerBox'>
                <h2>Todolist代办事项</h2>
                <input type='text' placeholder='请输入需要完成的事项' ref={listContext} />
                &nbsp;
                <button onClick={addList}>添加事项</button>
            </div>
            <div className='showBox'>
                <ul>
                    {listArr.map((listObj) => {
                        return (
                            <li key={listObj.id} className={listObj.flag ? 'finishStyle' : ''}>
                                <span onClick={() => finishBtn(listObj.id)}>{listObj.item}</span>
                                <button onClick={() => deleteBtn(listObj.id)} className='finishBtn'>
                                    删除
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='btnBox'>
                <button onClick={all}>全部</button>
                <button onClick={allFinish}>已完成</button>
                <button onClick={allUnFinish}>未完成</button>
            </div>
        </div>
    );
};

export default Index;
