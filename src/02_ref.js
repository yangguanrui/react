import React, { Component } from 'react';
class App extends Component {
    myref = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={() => this.handleClick1()}>事件1</button>
            </div>
        );

    }
    handleClick1 = () => {
        console.log('handleClick1');
        // this.myref.current 获取元素 
        console.log(this.myref.current.value);
    }
}

export default App;