// 函数式组件
export default function Son(props) {
    return (
        //  react中不能在页面直接渲染对象
        <div>子组件{props.val}</div>
    )
}