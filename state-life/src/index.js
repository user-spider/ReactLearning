import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*ReactDOM.render(
  <React.StrictMode>
    111
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 在元素渲染章节中，我们只了解了一种更新 UI 界面的方法。通过调用 ReactDOM.render() 来修改我们想要渲染的元素：
/*
function tick() {
    const element = (
        <div>
            <h1>hello</h1>
            <h3>It is {new Date().toLocaleTimeString()} !</h3>
        </div>
    )
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick, 1000)*/

// 在本章节中，我们将学习如何封装真正可复用的 Clock 组件。
// 我们可以从封装时钟的外观开始：
/*
function Clock(props) {
    return(
        <div>
            <h1>hello</h1>
            <h3>It is {props.date.toLocaleTimeString()} !</h3>
        </div>
    )
}
function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}
setInterval(tick, 1000)*/

// 然而，Clock 组件需要设置一个计时器，并且需要每秒更新 UI。
// 我们需要在 Clock 组件中添加 “state” 来实现这个功能。
// State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// ### 将函数组件转换成 class 组件
//    通过以下五步将 Clock 的函数组件转成 class 组件：
//        1. 创建一个同名的 ES6 class，并且继承于 React.Component。
//        2. 添加一个空的 render() 方法。
//        3. 将函数体移动到 render() 方法之中。
//        4. 在 render() 方法中使用 this.props 替换 props。
//        5. 删除剩余的空函数声明。
/*
class Clock extends React.Component {
    render() {
        return(
            <div>
                <h1>hello</h1>
                <h3>It is {this.props.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}*/
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// ### 向 class 组件中添加局部的 state
//    我们通过以下三步将 date 从 props 移动到 state 中：
//        1. 把 render() 方法中的 this.props.date 替换成 this.state.date ：
/*
class Clock extends React.Component {
    render() {
        return(
            <div>
                <h1>hello</h1>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}*/
//        2. 添加一个 class 构造函数，然后在该函数中为 this.state 赋初值：
/*
class Clock extends React.Component{
    // 通过以下方式将 props 传递到父类的构造函数中：
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return(
            <div>
                <h1>hello</h1>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}*/
// Class 组件应该始终使用 props 参数来调用父类的构造函数。
//        3. 移除 <Clock /> 元素中的 date 属性：
/*
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)*/
// 我们之后会将计时器相关的代码添加到组件中。
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// ### 将生命周期方法添加到 Class 中
//    当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
//    同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。
//    我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法：
//    这些方法叫做“生命周期方法”。

//    componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
/*
componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}*/

//    我们会在 componentWillUnmount() 生命周期方法中清除计时器：
/*
componentWillUnmount() {
    clearInterval(this.timerID);
}*/

//    最后，我们会实现一个叫 tick() 的方法，Clock 组件每秒都会调用它。
/*
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            {date: new Date()}
        )
    }

    render() {
        return(
            <div>
                <h1>hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)*/
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// ### 正确地使用 State
//    关于 setState() 你应该了解三件事：
//        1. 不要直接修改 State。
//                而是应该使用 setState()，构造函数是唯一可以给 this.state 赋值的地方
//        2. State 的更新可能是异步的
//                因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
//                要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
//                这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
//        3. State 的更新会被合并
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// ### 数据是向下流动的
// 我们称 state 为局部的或是封装的。因为除了拥有并设置了它的组件，其他组件都无法访问。
// 组件可以选择把它的 state 作为 props 向下传递到它的子组件中，这对于自定义组件同样适用

/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2>*/
/* <FormattedDate date={this.state.date} />*/

// FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的
/*
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}*/

//    这通常会被叫做“自上而下”或是“单向”的数据流。
//    任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。
