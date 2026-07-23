import React, { Component } from 'react';
import BScroll from 'better-scroll';
class App extends Component {
    state = {
        list: [],
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick1}>click</button>
                {/* <div id='content' style={{ height: '200px', overflow: "hidden" }}>
                    <ul >
                        {this.state.list.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </div> */}

            </div>
        );

    }
    handleClick1 = () => {
        
        let newlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        // 异步更新状态
        this.setState({
            list: newlist
        }, () => {
            console.log(this.state.list);
            
            // 可以通过回调函数同步执行
            // new BScroll(document.getElementById('content'))

        })




    }
}

export default App;