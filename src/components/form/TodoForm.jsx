import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './todo-form.scss';

const TodoForm = (props) => {
  const [task, setTask] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: task,
      isComplete: false,
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

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default TodoForm;
