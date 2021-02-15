import React from "react";
// import ReactDOM from "react-dom";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./Styles.css";

const todolist = [
  {
    task: 'Edit Individual Todos',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: 1528817084358,
    completed: false
  }
];

class TodoIndex extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // groceries: groceries
      todolist
    };
  }

  // Class methods to update state
  // function togglePurchased(itemId) {
  //    avoid creating functions like this
  //    because this is a reminder that classes
  //    in javascript were gleemed on as an ugly hack
  // }
  toggleDone = (itemId) => {
    console.log("bk: index.js: App: togglePurchased: itemId: ", itemId);
    // update state
    // this.state.groceries[id].purchased = false;
    this.setState({
      ...this.state,
      todolist: this.state.todolist.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearTodos = () => {
    this.setState({
     todolist: this.state.todolist.filter((task) => !task.completed)
    })
  }
  addItem = itemName => {
    console.log("NAL: App.js: App: addItem: itemName: ", itemName);
    this.setState({
      todolist: [...this.state.todolist, 
        {id: Date.now(), task: itemName, completed: false}]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List as an MVP</h1>
        <TodoList
          todolist={this.state.todolist}
          toggleDone={this.toggleDone}
          addItem={this.addItem}
          clearTodos={this.clearTodos} 
        />
      </div>
      <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default TodoIndex;