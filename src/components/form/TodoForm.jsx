import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './todo-form.scss';

const TodoForm = ({items, setItems}) => {
  const [task, setTask] = useState('');

  const addNewTask = () => {
    if (task) {
      setItems(
          [...items, {
            text: task,
            isComplete: false,
          }]);
      setTask('');
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Create a new todo...'
        className='todo-input'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className='todo-button'
        onClick={addNewTask}
        data-testid='todo-button'
      >
          Add
      </button>
    </div>
  );
};

TodoForm.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        isComplete: PropTypes.bool,
      }),
  ),
  setItems: PropTypes.func,
};

export default TodoForm;
