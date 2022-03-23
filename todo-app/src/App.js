import React from 'react';
import Todo from './components/todo/Todo.jsx';
import TodoItem from './components/item/TodoItem.jsx';




function App() {
  return (
    <div className="todo-app">
      <Todo />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
