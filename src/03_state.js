import React, { Component } from 'react';
import { flushSync } from 'react-dom';
class App extends Component {
    state = {
        bool: false,
    }
    render() {
        return (
            <div>
                <h1 id='aaa'> 修改状态</h1>
                <button onClick={this.handleClick1}>{this.state.bool ? '取消' : '收藏'}</button>
                <button onClick={this.handleClick2}>click2</button>

            </div>
        );

    }
    handleClick1 = () => {
        // 修改状态使用this.setState({})方法
        this.setState({
            bool: !this.state.bool
        })
        console.log(this.state.bool);
        console.log(document.getElementById('aaa')); // 此处获取不到元素
        
    }
    handleClick2 = () => {
        flushSync(() => {
            this.setState({
                bool: !this.state.bool
            })

        })
            console.log(this.state.bool);

    }
}
/*
  setState 异步更新状态，异步更新真实dom
  react17及之前 在异步逻辑中 同步更新状态，在同步逻辑中 异步更新状态
  react18 在同步或者异步逻辑中，都是异步更新状态 ,想要同步更新可以使用flushSync

*/
export default App;