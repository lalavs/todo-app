import React, { useState } from 'react';
import TodoForm from '../components/form/TodoForm';

const TodoItem = () => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    
    if(!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newItem = [item, ...items];
    setItems(newItem);
  }

  return (
    <div>
      <TodoForm onSubmit={addItem} />
    </div>
  )
}

export default TodoItem;
