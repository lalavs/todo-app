import React, { useState } from 'react';
import './todo-form.scss';

const TodoItem = (props) => {
  const [task, setTask] = useState('');
  const [id, setId] = useState(0);

  const giveId = () => {
    setId(id + 1);
    return id;
  }

  const addNewTask = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: giveId(),
      text: task,
    })

    setTask('');
  }

  return (
    <form 
        className='todo-form'
        onSubmit={addNewTask}>
      <input 
        type='text'
        placeholder='Create a new todo...'
        className='todo-input'
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button 
        className='todo-button'
      >
          Add
      </button>
    </form>
  )
}

export default TodoItem;
