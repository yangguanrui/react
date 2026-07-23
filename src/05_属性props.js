import React, { Component } from 'react';
import Son from './05_子组件'


class App extends Component {
    state = {
        //  组件内部使用
    }
    render() {
        let obj = {
            title: '子组件1',
            show: true
        }
        return (
            <div>
                <Son title="子组件" show={false}></Son>
                {/*  简写 */}
                <Son {...obj}></Son> 
            </div>
        );

    }

}

// 属性（props）
// 在组件中通过key=value的方式写属性，通过this.props 获取属性
// 在传参的时候 如果写成 isShow="true" 那么这是一个字符串 如果写成isShow={true} 这个是布尔值
// 默认属性值 defaultProps = { myname:"张三" }
// 属性验证在react19中推荐使用ts

export default App;