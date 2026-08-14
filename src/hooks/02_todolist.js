import React, { useState } from "react";
export default function App() {
    const [arr, setArr] = useState([])
    const [text,setText] = useState('')
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = ()=>{
        const newarr = [...arr,text]
        setArr(newarr)
        // 清空
        setText('')

    }
    return ( 
        <div>
            <input onChange={handleChange} value={text}></input>
            <button onClick={handleClick}>点击</button>
            <ul>
                {arr.map(item=><li key={item}>{item}</li>)}
            </ul>
        </div>
    )

} 