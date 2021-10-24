import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
ReactDOM.render(
  <h1>1111</h1>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 元素是构成 React 应用的最小砖块
// 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。
// React DOM 会负责更新 DOM 来与 React 元素保持一致。

// ---------------------------------------------------------------
// ### 将一个元素渲染为 DOM
// <div id="root"></div>
//    我们将其称为“根” DOM 节点，因为该节点内的所有内容都将由 React DOM 管理。
//    仅使用 React 构建的应用通常只有单一的根 DOM 节点。
//    如果你在将 React 集成进一个已有应用，那么你可以在应用中包含任意多的独立根 DOM 节点。
//    想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：
/*
const element = <h1>hello world</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);*/

// ---------------------------------------------------------------
// ### 更新已渲染的元素
//    React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。
//    一个元素就像电影的单帧：它代表了某个特定时刻的 UI。
//    考虑一个计时器的例子：
/*
function tick() {
    const element = (
        <div>
            <h1>时间：</h1>
            <h3>It is {new Date().toLocaleTimeString()}.</h3>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);*/

// ---------------------------------------------------------------
// ### React 只更新它需要更新的部分
//    React DOM 会将元素和它的子元素与它们之前的状态进行比较，
//    并只会进行必要的更新来使 DOM 达到预期的状态。
//    尽管每一秒我们都会新建一个描述整个 UI 树的元素，
//    React DOM 只会更新实际改变了的内容，也就是例子中的文本节点。