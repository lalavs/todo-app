import React from 'react';
import './todoitem.scss';
import { FiEdit3 } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

function TodoItem() {
  return (
    <div
      className='todo-row'
    >
      <div>textttt</div>
      <div className='todo-icons'>
        <FiEdit3 />
        <TiDeleteOutline />
      </div>
    </div>
  )
}

export default TodoItem;
