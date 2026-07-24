import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>
                <Son>
                    <div>123</div>
                    <div>456</div>
                    <div>789</div>
                </Son>
                <Son1 header={<h1>这是头部内容</h1>}>
                    
                </Son1>
            </div>

        )
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
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
                {this.props.children[0]}
            </div>
        )
    }

}
// 具名插槽
class Son1 extends Component {
    state = {
        userName: '',
        password: ''
    }
    render() {
        return (
            <div>
                <div>{this.props.header}</div>
            </div>
        )
    }

}
export default App