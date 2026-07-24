import React, { Component } from 'react';
class App extends Component {
    myref = React.createRef()
    state = {
        val: 'hello'
    }
    render() {
        return (
            <div>
                <Son ref={this.myref}></Son>
                <button onClick={this.handleLogin}>登录</button>

            </div>
        )
    }
    handleLogin = ()=>{
        // 获取子组件的值
       console.log(this.myref.current.state); 
    }
}
class Son extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div>
                <div> <label>账号</label>  <input value={this.state.userName} onChange={(e)=>this.setState({userName:e.target.value})}></input></div>
                <div><label>密码</label> <input value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input></div>
            </div>


        )
    }

}

export default App