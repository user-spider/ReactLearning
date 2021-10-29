import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*ReactDOM.render(
  <React.StrictMode>
    hello
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}*/
//    再创建一个 Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。
/*
function Greeting(props) {
    const isToggle = props.isToggle;
    if(isToggle) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}

ReactDOM.render(
    <Greeting isToggle={true}/>,
    document.getElementById('root')
)*/
// --------------------------------------------------

// --------------------------------------------------
// ### 元素变量
//    可以使用变量来储存元素。
//    它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。
//    观察这两个组件，它们分别代表了注销和登录按钮：
/*
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}*/
//    我们将创建一个名叫 LoginControl 的有状态的组件。
/*
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);*/
//    接下来，我们将介绍几种在 JSX 中内联条件渲染的方法。
// --------------------------------------------------

// --------------------------------------------------
// ### 与运算符 &&
/*
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Re: React', 'Re:Re:React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
)*/
//    如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
// --------------------------------------------------

// --------------------------------------------------
// ### 三目运算符
//    另一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 condition ? true : false。
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}*/
//    同样的，它也可以用于较为复杂的表达式中，虽然看起来不是很直观：
/*
render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            {isLoggedIn
                ? <LogoutButton onClick={this.handleLogoutClick} />
                : <LoginButton onClick={this.handLoginClock} />
            }
        </div>
    );
}*/
//    需要注意的是，如果条件变得过于复杂，那你应该考虑如何提取组件。
// --------------------------------------------------

// --------------------------------------------------
// ### 阻止组件渲染
//    在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。
//    若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
/*
function WarringBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="waring">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarringBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
)*/
//    在组件的 render 方法中返回 null 并不会影响组件的生命周期。