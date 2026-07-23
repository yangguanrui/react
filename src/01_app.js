import { Component } from 'react';
class App extends Component {

    render() {
        var obj = {
            color: 'yellow'
        }
        return (
            <div>
                <div style={{ color: 'red', height: '100px', width: '100px', backgroundColor: '#000' }}>hello</div>
                <span style={obj}>你好</span>
                <span className='active'>active</span>
                <div>
                    <label htmlFor='user'>用户名</label>
                    <input></input>
                </div>
                <div>{10 + 10}</div>
                {/* 事件处理 */}
                <input></input>
                <button onClick={() => this.handleClick1()}>事件1</button>
                <button onClick={this.handleClick2}>事件2</button>
                <button onClick={()=>{console.log('handleClick3');console.log(this)}}>事件3</button>
                <button onClick={this.handleClick4.bind(this)}>事件4</button>  {/* this 为undefined 可以手动修改this的指向*/}
                {/* 
                  改变this指向
                   1. call    会自动执行
                   2. apply   会自动执行
                   3. bind    不会自动执行
                
                */}
            </div>
        );

    }
    handleClick1 = () => {
        console.log('handleClick1');
        console.log(this);

    }
    handleClick2 = () => {
        console.log('handleClick2');
        console.log(this);

    }
    handleClick4() {
        console.log('handleClick4');
        console.log(this);
    }
}

// function App() {
//   return (
//     <div>
//       你好
//     </div>
//   )
// }
export default App;