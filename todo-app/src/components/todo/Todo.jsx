import React, { useState, useEffect } from 'react';
import TodoFilter from '../filter/TodoFilter';
import TodoForm from '../form/TodoForm';
import TodoItem from '../item/TodoItem';
import './todo.scss'; 

const Todo = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'complete Javascript'},
    {id: 2, text: 'read for one hour'},
    {id: 3, text: 'code'},
  ]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = (item) => {    
    if(!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    setItems([...items, item])
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

  const updateItem = (id, updatedItem) => {
    if(!updatedItem.text || /^\s*$/.test(updatedItem.text)) {
      return;
    }
    setItems(items.map((item) => item.id === id ? updatedItem : item))
  }

  const removeItem = (id) => {
    setItems(items.filter((item => item.id !== id)))
  }

  return (
    <div>
      <h1>TODOS</h1>
      <div className='todo-card'>
        <TodoForm onSubmit={addItem} />
        <TodoItem 
          items={items}
          completeItem={completeItem}
          updateItem={updateItem}
          removeItem={removeItem}
        />
        <TodoFilter />
        </div>
    </div>
  )
}

export default Todo;
