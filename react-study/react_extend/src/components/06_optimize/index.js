import React, { Component, PureComponent } from 'react';
import './index.less';

export default class Parent extends PureComponent {
    state = {
        carName: '奔驰c63'
    };
    changCar = () => {
        this.setState({ carName: '迈巴赫' });
        // this.setState({});
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(this.props, this.state);
    //     // console.log(nextProps, nextState);
    //     // return !(this.state.carName === nextState.carName);
    //     return !(this.state.carName === nextState.carName);
    // }

    render() {
        console.log('paarent===');
        return (
            <div className='parent'>
                <h1>我是parent组件</h1>
                <h3>我的车是:{this.state.carName}</h3>
                <button onClick={this.changCar}>点我换车</button>
                <Child carName={'1'} />
            </div>
        );
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(this.props, this.state);
    //     // console.log(nextProps, nextState);
    //     return !(this.props.carName === nextProps.carName);
    // }

    render() {
        console.log('child===');
        return (
            <div className='child'>
                <h1>我是Child组件</h1>
                <h3>我的车是:{this.props.carName}</h3>
            </div>
        );
    }
}
