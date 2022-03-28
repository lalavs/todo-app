import React, {useState} from 'react';
import './todo-item.scss';
import TodoForm from '../form/TodoForm';
import {FiEdit3} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import PropTypes from 'prop-types';

const TodoItem = ({items, completeItem, updateItem, removeItem}) => {
  const [edit, setEdit] = useState({});

  const submitUpdate = (value) => {
    updateItem(edit.id, value);

    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return items.map((item, index) => (
    <div
      key={index}
      className={item.isComplete ? 'todo-row todo-row__complete' : 'todo-row'}
    >
      <div
        key={item.id}
        onClick={() => completeItem(item.id)}
      >
        {item.text}
      </div>
      <div className='todo-icons'>
        <FiEdit3
          onClick={() => setEdit({id: item.id, value: item.text})}
        />
        <TiDeleteOutline
          onClick={() => removeItem(item.id)}
        />
      </div>
    </div>
  ));
};

TodoItem.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        status: PropTypes.bool,
      }),
  ),
  completeItem: PropTypes.func,
  updateItem: PropTypes.func,
  removeItem: PropTypes.func,
};

export default TodoItem;
