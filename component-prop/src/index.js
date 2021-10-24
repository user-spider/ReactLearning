import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
ReactDOM.render(
  <h1>hello world</h1>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。
// 组件，从概念上类似于 JavaScript 函数。
// 它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

// -------------------------------------------------------------
// ### 函数组件与 class 组件
//    定义组件最简单的方式就是编写 JavaScript 函数：(这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。)
/*
function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
};*/
//    你同时还可以使用 ES6 的 class 来定义组件：
/*
class Welcome extends React.Component {
    render() {
        return <h1>hello, {this.props.name}</h1>;
    }
}*/

// -------------------------------------------------------------
// ### 渲染组件
//    之前，我们遇到的 React 元素都只是 DOM 标签，不过，React 元素也可以是用户自定义的组件：
// const element = <Welcome name="Sara" />;
//    当 React 元素为用户自定义组件时，
//    它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，
//    这个对象被称之为 “props”。
/*
function Welcome(props) {
    return <h1>hello, {props.name}</h1>
}
const element = <Welcome name="yujing" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);*/
//    让我们来回顾一下这个例子中发生了什么：
//        1. 我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
//        2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
//        3. Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
//        4. React DOM 将 DOM 高效地更新为 <h1>Hello, Sara</h1>。
//    注意：组件名称必须以大写字母开头。（React 会将以小写字母开头的组件视为原生 DOM 标签。）

// -------------------------------------------------------------
// ### 组合组件
//    组件可以在其输出中引用其他组件。
/*
function Welcome(props) {
    return <h1>hello, {props.name}</h1>
}
function App() {
    return (
        <div>
            <Welcome name="111" />
            <Welcome name="222" />
            <Welcome name="333" />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/

// -------------------------------------------------------------
// ### 提取组件
//    将组件拆分为更小的组件。
/*
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInFo">
                <img className="Avatar"
                     src={props.auther.avatarUrl}
                     alt={props.auther.name}
                />
                <div className="UserInFo-name">
                    {props.auther.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}*/
//    该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。
//    因此，让我们从中提取一些组件出来。
//    首先，我们将提取 Avatar 组件：
/*
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}*/
//    我们现在针对 Comment 做些微小调整：
/*
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInFo">
                <Avatar user={props.author} />
                <div className="UserInFo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}*/
//    接下来，我们将提取 UserInfo 组件，该组件在用户名旁渲染 Avatar 组件：
/*
function UserInFo(props) {
    return (
        <div className="UserInFo">
            <Avatar user={props.user} />
            <div className="UserInFo-name">
                {props.user.name}
            </div>
        </div>
    );
}*/
//    进一步简化 Comment 组件：
/*
function Comment(props) {
    return (
        <div className="Comment">
            <UserInFo user={props.auther} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}*/

// -------------------------------------------------------------
// ### Props 的只读性
//    组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。
//    所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。