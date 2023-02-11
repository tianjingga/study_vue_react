import React, { Component } from 'react';

export default class index extends Component {
    state = {
        count: 0
    };

    increment = () => {
        /*
        setState 更新状态的2种写法
        1.setState 里面可以传入两个参数 ，第一个为状态改变对象，第二个为可选（可选就是可传可不传）的回调函数，该函数可用于查看数据马上更新的状态
        2.setState 里面可以传入两个参数 ，第一个为函数，该函数的返回值为状态改变对象，可以接受两个参数（state，props），第二个为可选（可选就是可传可不传）的回调函数，该函数可用于查看数据马上更新的状态
        */

        // 1.相当于第二种的语法糖
        const { count } = this.state;
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count);
        });

        // 2.传入为函数可以接收state 就不用先解构拿到state
        // this.setState(
        //     (state) => ({ count: state.count + 1 }),

        //     () => {
        //         console.log(this.state.count);
        //     }
        // );
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1>当前求和为:{count}</h1>
                <button onClick={this.increment}>点击➕</button>
            </div>
        );
    }
}
