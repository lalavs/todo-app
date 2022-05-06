import React, {useState} from 'react';

import TodoForm from '../form/TodoForm';
import TodoList from '../list/TodoList';
import './todo.scss';

const Todo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'complete Javascript',
      isComplete: false,
    },
    {
      id: 2,
      text: 'read for one hour',
      isComplete: false,
    },
    {
      id: 3,
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