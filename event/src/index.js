import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    11
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// ### 事件处理
//    React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
//    使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。如：
/*
<button onClick={activateLasers}>
    Activate Lasers
</button>
*/
//    你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
