import React, { Component } from 'react';
import TodoList from "../src/Component/TodoList"


 class App extends Component {
  render() {
    return (
      <div className="App">
         <TodoList />
      </div>
    );
  }
}

 export default App;