import React, { createRef } from 'react';
// import root from '../../index';
// import { useState, useEffect, useRef } from 'react';
class Demo extends React.Component {
    state = {
        count: 0
    };

    myRef = createRef();

    // 点击加的函数
    add = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    // 点击卸载组件的函数
    // unmount = () => {
    //     root.unmount(document.getElementById('root'));
    // };

    // 点击展示提示信息
    show = () => {
        console.log(this.myRef.current.value);
        alert(this.myRef.current.value);
    };

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         this.setState({ count: this.state.count + 1 });
    //     }, 1000);
    // }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我加</button>
                <button onClick={this.unmount}>点击卸载组件</button>
                <br />
                <input type='text' ref={this.myRef} />
                <button onClick={this.show}>提示信息</button>
            </div>
        );
    }
}

// function Demo() {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState('Tom');
//     const myRef = useRef();

//     function add() {
//         // 第一种写法:直接写入结果
//         // setCount(count + 1);
//         // 第二种写法:传入一个函数
//         // setCount((count) => count + 1);
//     }

//     function changName() {
//         setName('Jack');
//     }

//     function show() {
//         console.log(myRef);
//         alert(myRef.current.value);
//     }

//     // useEffect(() => {
//     //     setInterval(() => {
//     //         setCount((count) => count + 1);
//     //     }, 1000);
//     // }, []);

//     return (
//         <div>
//             <h1>当前求和为:{count}</h1>
//             <h1>我的名字是：{name}</h1>
//             <button onClick={add}>点我加</button>
//             <button onClick={changName}>点我修改名字</button>
//             <input type='text' ref={myRef} />
//             <button onClick={show}>提示信息</button>
//         </div>
//     );
// }

export default Demo;
