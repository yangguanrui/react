import React, { Component } from 'react';
class App extends Component {
    state = {
        list: ['111', '222', '333'],
    }
    myref = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={this.handleAdd}>添加</button>
                <ul>
                    {
                        this.state.list.map((item,index) =>
                            <li key={item} >
                                {/* <span dangerouslySetInnerHTML={{__html:item}}>{item}</span>
                                 */}
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                                <button onClick={() => this.handleDel(index)}>删除</button>
                            </li>,
                        )
                    }
                </ul>
            </div>
        );
    }
    handleAdd = () => {
        let newlist = [...this.state.list] // 深拷贝，直接赋值是浅拷贝，修改原始数据会有问题
        newlist.push(this.myref.current.value)
        this.setState({
            list:newlist
        })
    }
    handleDel = (index) => {
        console.log('del');
        // let newlist = [...this.state.list]
        let newlist = this.state.list.slice()  // slice不传值的情况下，数据都是基本数据类型的情况下，他相当于深拷贝
        newlist.splice(index,1)
        this.setState({list:newlist})

    }

}
// dangerouslySetInnerHTML 相当于vue中的v-html

export default App;