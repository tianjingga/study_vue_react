import React, { Component } from 'react';

class Child extends Component {
    state = {
        users: [
            { id: '001', name: 'Tom', age: 18 },
            { id: '002', name: 'Jack', age: 18 },
            { id: '003', name: 'Lff', age: 18 }
        ]
        // users: 'qw'
    };

    render() {
        return (
            <div>
                <h1>我是Child组件</h1>
                {this.state.users.map((userObj) => {
                    return (
                        <li key={userObj.id}>
                            名字:{userObj.name} === 年龄:{userObj.age}
                        </li>
                    );
                })}
            </div>
        );
    }
}

export default Child;
