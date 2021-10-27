import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*ReactDOM.render(
  <React.StrictMode>
    11
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// ### 事件处理
//    React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
//    使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。如：
/*
<button onClick={activateLasers}>
    Activate Lasers
</button>
*/
//    你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
//    HTML 中阻止链接默认打开一个新页面，在 React 中，可能是这样的：
/*
function Action() {
    function prevent(e) {
        e.preventDefault();
        console.log('111');
    }

    return(
        <a href="#" onClick={prevent}>Click me</a>
    )
}*/
//    使用 React 时，你一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器。
//    只需要在该元素初始渲染的时候添加监听器即可。
/*
class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick= () => {
        this.setState(
            // 箭头函数返回值加了小括号是为了避免产生歧义，防止把返回值认成一个对象
            state => ({isToggleOn: !this.state.isToggleOn})
        )
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'FALSE'}
            </button>
        )
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)*/
//    在 JavaScript 中，class 的方法默认不会绑定 this。
//    如果觉得使用 bind 很麻烦，这里有两种方式可以解决。
/*
class LoggingButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}*/
//    如果你没有使用 class fields 语法，你可以在回调中使用箭头函数：
/*
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}*/
// -----------------------------------------------------------------

// -----------------------------------------------------------------
// ### 向事件处理程序传递参数
//    例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：
/*
<button onClick={(e) => deleteRow(id, e)}>
    Delete Row
</button>
<button onClick={this.deleteRow.bind(this, id)}>
    Delete Row
</button>*/
//    上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。