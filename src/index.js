import react from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TodoName() {
    return <input className="todoName todoControl" type="text" name="todoName" />;
}

function TodoText() {
    return <input className="todoText todoControl" type="text" name="todoText" />;
}

function TodoAddBtn() {
    return <input className="todoAddBtn todoControl" type="button" name="todoAddBtn" value="Add todo" />;
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [{ Name: "Name", Text: "Text" }],
        };
    }

    renderTodoList() {
        let todoList = [];

        for (let i = 0; i < this.state.todoList.length; i++) {
            todoList.push(
                <div className="todo" key={i}>
                    <p className="todoName">{this.state.todoList[i].Name}</p>
                    <p className="todoText">{this.state.todoList[i].Text}</p>
                </div>
            );
        }

        return todoList;
    }

    render() {
        this.state.todoList.push({ Name: "Name1", Text: "Text1" });

        return this.renderTodoList();
    }
}

ReactDOM.render(
    <div className="App">
        <div className="todoControls">
            <TodoName />
            <TodoText />
            <TodoAddBtn />
        </div>
        <div className="todoList">
            <TodoList />
        </div>
    </div>,
    document.getElementById("root")
);
