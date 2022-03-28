import React from 'react';
import './todo-filter.scss';

const TodoFilter = () => {
  return (
    <div className='todo-filter'>
      <div>...items left</div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default TodoFilter;
