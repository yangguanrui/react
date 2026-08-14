import React, { useEffect, useState } from "react";
// useEffect的主要作用是处理组件中的“副作用”。 
/*
 副作用指的是那些不属于“渲染”本身，但会影响组件外部或需要异步执行的操作。常见的例子包括：
   数据获取：调用 API 接口请求数据。
   DOM 操作：直接修改页面标题、操作 Canvas 或第三方库（如 D3.js）的实例。
   订阅：设置事件监听器、WebSocket 连接或定时器（setInterval）。
   日志记录：在页面渲染时发送分析数据。 
 */
// 在函数式组件中，当组件的属性和状态导致DOM发生变化会重新执行这个函数，可以使用useEffect解决这个问题
// useEffect 传两个参数，第一个参数是一个回调函数，第二个参数是一个数组

export default function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        // 模拟请求
        setTimeout(() => {
            console.log(123);
            let arr = [1, 2, 3, 4, 5, 6]
            setList(arr)
        }, 1000)
    }, []) // 传空数组

    return (
        <div>
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )

} 