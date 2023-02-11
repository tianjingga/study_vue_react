import React, { Component, Fragment } from 'react';

export default class index extends Component {
    render() {
        return <Fragment key={0}>我是fragment 里面的内容,用于最外层div的包裹,不会被解析成标签,有一个key属性</Fragment>;
    }
}
