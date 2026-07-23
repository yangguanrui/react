import React, { Component } from 'react';
import Son from './06_子组件'
class App extends Component {
    state = {
        //  组件内部使用
        val: 'hello'
    }
    render() {

        return (
            <div>
                {/* 非受控 */}
                {/* <input value="hello"></input> */}
                {/* <input value="hello" ></input> */}
                {/* 受控 */}
                <input value={this.state.val} onChange={this.handleChange}></input>
                <Son val={this.state.val}></Son>
            </div>
        );

    }
    handleChange = (e) => {
       this.setState({
          val:e.target.value
       })
    }

}
/*
  受控组件 = value 绑定 state，通过 onChange 修改 state 其实就是父传子
  非受控组件 = value 存在 DOM 中，通过 ref 获取。
  使用state就是受控，不使用state就是非受控
*/

export default App;