import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
ReactDOM.render(
  <React.StrictMode>
    map-key
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### 渲染多个组件
//    你可以通过使用 {} 在 JSX 内构建一个元素集合。
//    下面，我们使用 Javascript 中的 map() 方法来遍历 numbers 数组。
//    将数组中的每个元素变成 <li> 标签，最后我们将得到的数组赋值给 listItems：
/*
const numbers = [1, 2, 3, 4, 5];
const listNumber = numbers.map(
    (number) => <li>{number}</li>
);
ReactDOM.render(
    <ul>
        {listNumber}
    </ul>,
    document.getElementById('root')
)*/
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### 基础列表组件
/*
function NumberList(props) {
    const numbers = props.numbers;
    const listNumber = numbers.map((number) => <li key={number.toString()}>{number}</li>);

    return (
        <ul>
            {listNumber}
        </ul>
    )
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)*/
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### key
//    key 帮助 React 识别哪些元素改变了，比如被添加或删除。
//    因此你应当给数组中的每一个元素赋予一个确定的标识。
//    通常，我们使用数据中的 id 来作为元素的 key：
/*
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
)*/
//    当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：
/*
const todoItems = todos.map((todo, index) =>
    <li key={index}>
        {todo.text}
    </li>
)*/
//    如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### 用 key 提取组件
//    元素的 key 只有放在就近的数组上下文中才有意义。
//    比方说，如果你提取出一个 ListItem 组件，
//    你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 <li> 元素上。
/*
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()} value={number} />
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);*/
//    一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### key 只是在兄弟节点之间必须唯一
//    数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。
//    它们不需要是全局唯一的。
//    当我们生成两个不同的数组时，我们可以使用相同的 key 值：
/*
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    );
     const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
     );
     return (
         <div>
             {sidebar}
             <hr/>
             {content}
         </div>
     )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);*/
// ------------------------------------------------------------

// ------------------------------------------------------------
// ### 在 JSX 中嵌入 map()
//    JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果：
/*
function  NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((numbers) =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    );
}*/
//    这么做有时可以使你的代码更清晰，但有时这种风格也会被滥用。
//    如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机。

