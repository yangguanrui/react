import React, { Component } from 'react';
// 状态提升 其实就是两个子组件之间的通信，这两个子组件数据都传到父组件，然后再父组件中处理传给子组件 数据流变成：子A → 父 → 子B，双向同步。
class App extends Component {
    state = {
        son1Data: '',
    }

    render() {
        return (
            <div>
                <Son1 getdata1={this.getdata1} />
            </div>
        )
    }
    getdata1 = (val, callback) => {
        this.setState({
            son1Data: val
        }, () => {
            console.log(this.state.son1Data, 'son1data');
            console.log(val, 'val');
            if (callback) callback()
        })
    }


}

class Son1 extends Component {
    componentDidMount() {
        this.props.getdata2(this.state.son1Data)
    }
    state = {
        son1Data: '这是son1的数据'
    }
    render() {
        return (
            <div>
                <h1>这是son1</h1>
                <button onClick={() => this.getSon2Data()}>获取son2的数据</button>
            </div>
        )
    }
    getSon2Data = () => {
        console.log(this.state.son1Data);

        this.props.getdata1(this.state.son1Data, () => {


        })
    }
}



export default App