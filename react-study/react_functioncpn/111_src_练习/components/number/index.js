import React, { useRef, useState } from 'react';
import './index.less';

const Index = () => {
    const [numA, setNumA] = useState();
    const [numB, setNumB] = useState();
    const [sum, setSum] = useState();
    const [fh, setFH] = useState();

    const refA = useRef();
    const refB = useRef();
    function add() {
        const B = refB.current.value;
        console.log(B);
        setNumA(refA.current.value * 1);
        setFH('+');
    }
    function decrement() {
        setNumA(refA.current.value * 1);
        setNumB(refB.current.value * 1);
        setSum(refA.current.value * 1 - refB.current.value * 1);
        setFH('-');
    }
    function take() {
        setNumA(refA.current.value * 1);
        setNumB(refB.current.value * 1);
        setSum(refA.current.value * 1 * refB.current.value * 1);
        setFH('*');
    }
    function division() {
        setNumA(refA.current.value * 1);
        setNumB(refB.current.value * 1);
        setSum(((refA.current.value * 1) / refB.current.value) * 1);
        setFH('➗');
    }

    function js() {
        setNumB(refB.current.value * 1);
        setSum(refA.current.value * 1 + refB.current.value * 1);
    }

    // function sum() {}

    return (
        <div className='box'>
            <h2>
                数值A: <input type='text' placeholder='请输入数字' ref={refA} />
            </h2>
            <button onClick={add}>➕</button>&nbsp;
            <button onClick={decrement}>➖</button>&nbsp;
            <button onClick={take}>✖️</button>&nbsp;
            <button onClick={division}>➗</button>&nbsp;
            <h2>
                数值B: <input type='text' placeholder='请输入数字' ref={refB} />
            </h2>
            <button onClick={js}>结算</button>
            <h3>计算结果为:{sum !== undefined ? <p>{`${numA}${fh}${numB}=${sum}`}</p> : ''}</h3>
        </div>
    );
};

export default Index;
