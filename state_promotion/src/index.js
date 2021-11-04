import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
ReactDOM.render(
  <React.StrictMode>
    '状态提升'
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
//    多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
//    我们创建一个名为 Calculator 的组件。
//    它渲染一个用于输入温度的 <input>，并将其值保存在 this.state.temperature 中。
//    另外, 它根据当前输入值渲染 BoilingVerdict 组件。
/*
function  BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({temperature: event.target.value});
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={this.state.temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(this.state.temperature)}/>
            </fieldset>
        );
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)*/
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// ### 添加第二个输入框
//    我们的新需求是，在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。
//    我们先从 Calculator 组件中抽离出 TemperatureInput 组件，
//    然后为其添加一个新的 scale prop，它可以是 "c" 或是 "f"：
/*
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter tempreature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}*/
//    我们现在可以修改 Calculator 组件让它渲染两个独立的温度输入框组件：\
/*
class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)*/
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// ### 编写转换函数
//    首先，我们将编写两个可以在摄氏度与华氏度之间相互转换的函数：
/*
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}*/
//    上述两个函数仅做数值转换。
//    而我们将编写另一个函数，它接受字符串类型的 temperature 和转换函数作为参数并返回一个字符串。
//    我们将使用它来依据一个输入框的值计算出另一个输入框的值。
/*
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {  // 检查值是否为 NaN（非数字）
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}*/
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// ### 状态提升
//    到目前为止, 两个 TemperatureInput 组件均在各自内部的 state 中相互独立地保存着各自的数据。
//    在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。
//    这就是所谓的“状态提升”。
//    接下来，我们将 TemperatureInput 组件中的 state 移动至 Calculator 组件中去。
//    由于两个 TemperatureInput 组件的 props 均来自共同的父组件 Calculator，因此两个输入框中的内容将始终保持一致。
//    当我们想要响应数据改变时，我们需要调用 Calculator 组件提供的 this.props.onTemperatureChange()，而不再使用 this.setState()。
/*
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}*/
//     完整代码
/*
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)*/
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// ### 学习小结
//    在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。
//    你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。
