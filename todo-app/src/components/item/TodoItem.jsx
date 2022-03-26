import React from 'react';
import './todoitem.scss';
import { FiEdit3 } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

const TodoItem = ({ items, completeItem }) => {
  
  return items.map((item, index) => (
    <div
      key={index}
      className='todo-row'
    >
      <div 
        key={item.id}
        onClick={() => completeItem(item.id)}
      >
        {item.text}
      </div>
      <div className='todo-icons'>
        <FiEdit3 />
        <TiDeleteOutline />
      </div>
    </div>
  ))
}

export default TodoItem;
