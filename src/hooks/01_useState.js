import React, { useState } from "react";
export default function App(){
    const [name,setName] = useState('zhangsan')
    console.log(name);
      
    return(
        <div>
            app-{name}
            <button onClick={()=>{
                setName('lisi')
            }}>change</button>
        </div>
    )
}