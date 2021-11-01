import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*
ReactDOM.render(
  <React.StrictMode>
    form
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### 受控组件
//    在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
//    渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
//    被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
//    例如，如果我们想让前一个示例在提交时打印出名称，我们可以将表单写为受控组件：
/*
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    //    event.target.value 获取当前文本框的值
        this.setState({value: event.target.value});
    }

    handleClick(event) {
        alert('A name was submitted:' + this.state.value);
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value='submit' />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)*/
//    对于受控组件来说，输入的值始终由 React 的 state 驱动。
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### textarea 标签
//    在 HTML 中, <textarea> 元素通过其子元素定义其文本
//    而在 React 中，<textarea> 使用 value 属性代替。
//    这样，可以使得使用 <textarea> 的表单和使用单行 input 的表单非常类似：
/*
class EassyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'sfsdfasfdsfa'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('ssss' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章：
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value='提交'/>
            </form>
        )
    }
}

ReactDOM.render(
    <EassyForm />,
    document.getElementById('root')
)*/
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### select 标签
//    在 HTML 中，<select> 创建下拉列表标签。
//    React 并不会使用 selected 默认选中属性，而是在根 select 标签上使用 value 属性。
/*
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味：
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }

}
ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
)*/
//    总的来说，这使得 <input type="text">, <textarea> 和 <select> 之类的标签都非常相似
//    它们都接受一个 value 属性，你可以使用它来实现受控组件。
//    注意:  你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### 文件 input 标签
//     <input type="file" />
//    因为它的 value 只读，所以它是 React 中的一个非受控组件。
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### 处理多个输入
//    当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，
//    并让处理函数根据 event.target.name 的值选择要执行的操作。
/*
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? !this.state.isGoing : target.value;

        this.setState({
            [target.name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input type="checkbox"
                           name="isGoing"
                           checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input type="number"
                           name="numberOfGuests"
                           value={this.state.numberOfGuests}
                           onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
)*/
//    这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值：
/*
this.setState({
    [name]: value
})*/
//    等同 ES5:
/*
var partialState = {};
partialState[name] = value;
this.setState(partialState);*/
//    另外，由于 setState() 自动将部分 state 合并到当前 state, 只需调用它更改部分 state 即可。
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ### 受控输入空值
//    在受控组件上指定 value 的 prop 会阻止用户更改输入。
//    如果你指定了 value，但输入仍可编辑，则可能是你意外地将value 设置为 undefined 或 null。

