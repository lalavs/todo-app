import React, { useState } from 'react';
import TodoForm from '../form/TodoForm';

const Todo = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {    
    if(!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newItem = [item, ...items];
    setItems(newItem);
  }

  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  

  return (
    <div>
      <TodoForm onSubmit={addItem} />
    </div>
  )
}

export default Todo;
