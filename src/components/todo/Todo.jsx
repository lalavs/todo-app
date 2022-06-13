import React, {useState} from 'react';

import TodoForm from '../form/TodoForm';
import TodoList from '../list/TodoList';
import './todo.scss';

const Todo = () => {
  const [items, setItems] = useState([
    {
      text: 'complete Javascript',
      isComplete: false,
    },
    {
      text: 'read for one hour',
      isComplete: false,
    },
    {
      text: 'code',
      isComplete: false,
    },
  ]);

  return (
    <div>
      <h1>TODOS</h1>
      <div className='todo-card'>
        <TodoForm
          items={items}
          setItems={setItems}
        />
        <TodoList
          items={items}
          setItems={setItems}
        />
      </div>
    </div>
  );
};

export default Todo;
