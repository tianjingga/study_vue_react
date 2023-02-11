import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {
        hasError: ''
    };
    // 当该组件的子组件出错时，会触发getDerivedStateFromError 并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error };
    }

    componentDidCatch() {
        console.log('统计此处错误，反馈给服务器，用于通知编码人员进行BUG的解决');
    }

    render() {
        return (
            <div>
                <h1>我是Parent组件</h1>
                {this.state.hasError ? <h2>网络延迟，请稍后重试</h2> : <Child />}
            </div>
        );
    }
}

export default Parent;
