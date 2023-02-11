import React, { Component } from 'react';
import './index.less';

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h1>我是Parent组件</h1>
                <A render={(name) => <B name={name} />} />
            </div>
        );
    }
}

class A extends Component {
    state = { name: 'Tom' };
    render() {
        const { name } = this.state;
        // console.log(this.props);
        return (
            <div className='a'>
                <h1>我是A组件</h1>
                {this.props.render(name)}
            </div>
        );
    }
}
class B extends Component {
    render() {
        return (
            <div className='b'>
                <h1>我是C组件</h1>
                <h2>A组件传过来的数据:{this.props.name}</h2>
            </div>
        );
    }
}
