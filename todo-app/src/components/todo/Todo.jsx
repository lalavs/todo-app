import React, { useState } from 'react';
import TodoForm from '../form/TodoForm';
import TodoItem from '../item/TodoItem';

const Todo = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {    
    if(!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newItem = [item, ...items];
    setItems(newItem);
    // console.log(...items)
  }

  const completeItem = id => {
    let updatedItems = items.map((item) => {
      if(item.id === id) {
        item.isComplete = !item.isComplete
      }
      return item;
    })
    setItems(updatedItems);
  }

  const removeItem = (item) => {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div>
      <TodoForm onSubmit={addItem} />
      <TodoItem 
        items={items}
        complete={completeItem}
      />
    </div>
  )
}

export default Todo;
