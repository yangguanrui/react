import React, { Component } from "react";
export default class App extends Component {
    // componentWillMount(){
    //     console.log('componentwillmount',1);
    // }
    componentDidMount() {
        console.log("componentDidMount", 3);
        console.log('componentDidMount', document.getElementById('box'));

    }
    state = {
        val: '123',
        bool: true
    }
    render() {
        console.log('render', document.getElementById('box'));
        return (
            <div id="box">
                <p>{this.state.val}</p>
                <button onClick={this.handleClick}> click</button>
                { this.state.bool ? <Son></Son>:''}
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true
    }

    handleClick = () => {  
        this.setState({
            val: '999',
            bool: false
        })
    }
}
class Son extends Component {
    state = {

    }
    render() {
        return (
            <div>这是son</div> 
        )
    }
    componentWillUnmount() {
       console.log("组件销毁了");
       
    }
}
/*
  生命周期
  初始化阶段
  componentWillMount  React v16.3 开始被标记为不安全的（unsafe），并在 v17 中彻底移除了。(会报警告⚠️)
  render 只负责"描述"UI 计算并返回要渲染的内容（JSX）它不涉及真实的 DOM 操作 执行完后，React 会对比虚拟 DOM，然后更新真实 DOM 当state数据修改时就会执行
  componentDidMount 此时真实 DOM 已经更新完毕，可以安全操作 DOM 适合执行需要 DOM 节点的操作（如测量尺寸、添加事件监听、请求数据）
  更新阶段
  componentWillReceiveProps 标记为不安全 
  shouldComponentUpdate 作用就是能在当前渲染发生之前，提前拿到组件即将变化的新值，然后与当前的值（this.props 和 this.state）进行比较，
  决定是否要执行这次更新。父组件更新时会render子组件也会随之更新，可以判断返回false不更新子组件
  componentWillUpdate 标记为不安全 在render前执行，dom还没算出差异可能就会执行
  render
  componentDidUpdate prevProps, prevState 旧值  
  销毁阶段
  componentWillUnmount 清除定时器、解绑事件、取消订阅等
  
  getDerivedStateFromProps 第一次初始化组件及后续更新过程中（包括自身状态更新以及父传子）返回一个对象作为新的state，
  返回null则说明不需要在这里更新state，旨在以更安全的方式替代旧的 componentWillReceiveProps
  getSnapshotBeforeUpdate 在render之后执行 DOM发生变化后执行。比componentWillupdate更安全
*/ 