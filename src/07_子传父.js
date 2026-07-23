import React, { Component } from 'react';
class App extends Component {
    state = {
        val: 'hello'
    }
    render() {
        return (
            <div>
                <Son getData={this.getData}></Son>
            </div>
        )
    }
    getData = (option)=>{
        console.log(option);
        
    }
}
class Son extends Component {
    // 用constructor接收props后可以在全局通过this. 拿到props里面的值
    // 如果不用constructor接收的话，解构后只能在模板中使用
    constructor(props){
        super(props)
        this.getData = props.getData
    }
    render() {
        return (
            <div>
                <button onClick={this.sendData}>
                    给父组件传值
                </button>
            </div>
        )
    }
    sendData = () => {
        this.getData("我是子组件的数据");
    }
}
// 子传父就是在父组件中向子组件传递一个函数，然后再子组件中调用这个函数传参，然后这个父组件中定义的这个传递的这个函数就可以接收到。和vue中的逻辑一样
export default App