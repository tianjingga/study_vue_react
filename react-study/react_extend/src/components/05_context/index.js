import React, { Component, createContext } from 'react';
import './index.less';

const MyContext = createContext();
const { Provider, Consumer } = MyContext;

export default class A extends Component {
    state = {
        useName: 'Tom',
        age: 18
    };

    render() {
        const { useName, age } = this.state;
        return (
            <div className='parent'>
                <h1>我是A组件</h1>
                <h3>我的用户名是:{this.state.useName}</h3>
                <Provider value={{ useName, age }}>
                    <B />
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h1>我B组件</h1>
                <h3> A的用户名是:？？？</h3>
                <C />
            </div>
        );
    }
}

class C extends Component {
    static contextType = MyContext;
    render() {
        console.log(this.context);
        const { useName, age } = this.context;
        return (
            <div className='grand'>
                <h1>我是C组件</h1>
                <h3> A的用户名是:{`${useName},年龄是:${age}`}</h3>
            </div>
        );
    }
}

// function C() {
//     return (
//         <div className='grand'>
//             <h1>我是C组件</h1>
//             <Consumer>
//                 {(value) => {
//                     const { useName, age } = value;
//                     return <h3> A的用户名是:{`${useName},年龄是:${age}`}</h3>;
//                 }}
//             </Consumer>
//         </div>
//     );
// }
