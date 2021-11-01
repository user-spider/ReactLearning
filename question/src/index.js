import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = (
    <div>
        <h2>1. 函数组件和 class 组件的区别，用途</h2>
        <h2>2. state 和 props 的区别</h2>
        <h2>3. 父子组件传值</h2>
        <h2>4. 生命周期函数</h2>
        <h2>5. 数据流</h2>
        <h2>6. state 的更新是异步的，所以 setState 接受函数而不是一个对象</h2>
        <h2>7. 有状态组件和无状态组件</h2>
        <h2>8. class 函数组件二者在返回中引用函数的区别</h2>
        <h2>9. 表单相关 formik </h2>
    </div>
)
ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

