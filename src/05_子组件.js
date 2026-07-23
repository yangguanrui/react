// import React, { Component } from 'react';
// import PropTypes  from 'prop-types'
// console.log(PropTypes);

// export default class Son extends Component {  
//     render() {
//         // console.log(this.props); // 获取父组件传来的值
//         const { title,show = true } = this.props
//         return (
//             <div>
//                 {/* {this.props.title} */}
//                 {title}
//                 { show ? '1':'2'}
//             </div>
//         );
//     }
// }
// react19中不生效可以通过解构this.props 
// Son.defaultProps = {
//      show:true
// }
// 类属性 属性验证 react19中不生效
// Son.propTypes = {
//      title:PropTypes.bool
// }
// 

// 函数式组件
export default function Son(props){
   return(
    //  react中不能在页面直接渲染对象
     <div>{props.title}</div>
   )
}