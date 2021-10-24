import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// -----------------------------------------------------------------------
// ### 为什么使用 JSX
//    在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。
//    它还可以使 React 显示更多有用的错误和警告消息。

// -----------------------------------------------------------------------
// ###  在 JSX 中嵌入表达式
/*
const name = 'Gong Yujing';
const element = <h1>hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
);
*/
// 在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。
/*
function format(user) {
    return user.firstname + ' ' + user.lastname;
}
const user = {
    firstname: 'Yujing',
    lastname: 'Gong'
}
ReactDOM.render(
    <h1>hello, {format(user)}</h1>,
    document.getElementById('root')
);*/

// -----------------------------------------------------------------------
// ### JSX 也是一个表达式
/*
function getGreeting(user) {
    if(user) {
        return <h1>hello, {format(user)}</h1>;
    }
    return <h1>hello, jenny</h1>;
}*/

// -----------------------------------------------------------------------
// ### JSX 特定属性
//    你可以通过使用引号，来将属性值指定为字符串字面量
// const element = <div tabIndex="0"></div>;
//    也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
// const element = <img src={user.avatalUrl}/>
//    应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
//    警告： JSX 以小驼峰命名，如 nameClass

// -----------------------------------------------------------------------
// ### 使用 JSX 指定子元素
//    假如一个标签里面没有内容，你可以使用 /> 来闭合标签，就像 XML 语法一样：
// const element = <img src={user.avatarUrl} />;
//    JSX 标签里能够包含很多子元素:（我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。）
/*
const element = (
    <div>
        <h1>hello</h1>
        <h2>Yujing Gong</h2>
    </div>
);*/

// -----------------------------------------------------------------------
// ### JSX 防止注入攻击
//    React DOM 在渲染所有输入内容之前，默认会进行转义。
//    它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。
//    所有的内容在渲染之前都被转换成了字符串。
//    这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

// -----------------------------------------------------------------------
// ### JSX 表示对象
//    Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
//    以下两种代码等效：
/*
const element = (
    <h1 className="111">
        hello
    </h1>
);*/
/*
const element = React.createElement(
    'h1',
    {className: '111'},
    'hello'
);*/
