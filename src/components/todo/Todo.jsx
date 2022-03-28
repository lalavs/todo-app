import React, {useState, useEffect} from 'react';

import TodoFilter from '../filter/TodoFilter';
import TodoForm from '../form/TodoForm';
import TodoItem from '../item/TodoItem';
import './todo.scss';

const Todo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'complete Javascript',
      status: true,
    },
    {
      id: 2,
      text: 'read for one hour',
      status: true,
    },
    {
      id: 3,
      text: 'code',
      status: false,
    },
  ]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    setItems([...items, item]);
  };

  const completeItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setItems(updatedItems);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>TODOS</h1>
      <div className='todo-card'>
        <TodoForm onSubmit={addItem} />
        <TodoItem
          items={items}
          completeItem={completeItem}
          removeItem={removeItem}
        />
        <TodoFilter />
      </div>
    </div>
  );
};

export default Todo;
