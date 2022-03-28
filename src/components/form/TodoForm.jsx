import React, {useState} from 'react';
import './todo-form.scss';

const TodoItem = (props) => {
  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();

    // eslint-disable-next-line react/prop-types
    props.onSubmit({
      id: Date.now(),
      text: task,
    });

    setTask('');
  };

  return (
    <form
      className='todo-form'
      onSubmit={addNewTask}>
      <input
        type='text'
        placeholder='Create a new todo...'
        className='todo-input'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className='todo-button'
      >
          Add
      </button>
    </form>
  );
};

export default TodoItem;
