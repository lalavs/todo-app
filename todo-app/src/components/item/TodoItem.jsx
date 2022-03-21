import React, { useState } from 'react';
import './todoItem.scss';

const TodoItem = (props) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Date.now(),
    //   text: task,
    // })

    setTask('');
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <form 
        className='todo-form'
        onSubmit={handleSubmit}>
      <input 
        type='text'
        name='text'
        placeholder='Добавить задание'
        className='todo-input'
        value={task}
        onChange={handleChange}
      />
      <button 
        className='todo-button'
      >
          Добавить
      </button>
    </form>
  )
}

export default TodoItem;
