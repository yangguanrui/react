import React, { Component, PureComponent } from "react";
/*
  PureComponent 和 shouldComponentUpdate 类似 shouldComponentUpdate = 手动控制（自定义逻辑）PureComponent = 自动控制（浅比较）
  PureComponent 对 props 和 state 进行浅比较，基本类型比值，引用类型比地址
*/ 
export default class App extends Component {
    state = {
        obj: {
            name: "zhangsan",
            age: 19
        },
        title: "hello"
    }
    render() {
        return (
            <div>
                <button onClick={this.changeData}>修改传的title</button>
                <button onClick={this.changeDataObj}>修改传的obj</button>
                <Son title={this.state.title} obj={this.state.obj}></Son>
            </div>

        )
    }
    changeData = () => {
        console.log(this.state.title);
        this.setState({
            title: 'world'
        })

    }
    changeDataObj = () => {
        this.setState({
            obj: {
                name: "张三",
                age: 19
            }
        })

    }


}
class Son extends PureComponent {

    render() {
        console.log("Child 渲染了");
        const { title, obj } = this.props
        return (
            <div>
                {title}
                <br></br>
                {obj.name}
            </div>
        )
    }

}
