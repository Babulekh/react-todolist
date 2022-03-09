import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: "",
            todoText: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        if (!this.state.todoName) return;
        this.props.onClick(this.state.todoName, this.state.todoText);
        this.setState({
            todoName: "",
            todoText: "",
        });
    }

    handleChange({ target }) {
        const [name, value] = [target.name, target.value];
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="todoControls">
                <input className="todoName todoControl" type="text" name="todoName" onChange={this.handleChange} value={this.state.todoName} />
                <input className="todoText todoControl" type="text" name="todoText" onChange={this.handleChange} value={this.state.todoText} />
                <button className="todoAddBtn todoControl" type="button" name="todoAddBtn" onClick={this.handleSubmit}>
                    Add todo
                </button>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        return (
            <div className="todoList">
                {this.props.todoList.map((todo, index) => (
                    <div className="todo" key={index}>
                        <p className="todoName">{todo.name}</p>
                        <p className="todoText">{todo.text}</p>
                    </div>
                ))}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
        };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(name, text) {
        const todoList = this.state.todoList.slice();
        this.setState({ todoList: todoList.concat([{ name: name, text: text }]) });
    }

    render() {
        return (
            <div className="App">
                <Controls onClick={this.addTodo} />
                <List todoList={this.state.todoList} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
