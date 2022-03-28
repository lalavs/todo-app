import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FiEdit3} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdOutlineDone} from 'react-icons/md';

import './todo-item.scss';

const TodoItem = ({items, completeItem, removeItem}) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  const editItem = (id, text) => {
    setEdit(id);
    setValue(text);
  };

  const saveItem = (id) => {
    const newItem = [...items].map((item) => {
      if (item.id === id) {
        item.text = value;
      }
      return;
    });
    setValue(newItem);
    setEdit(null);
  };

  return items.map((item, index) => (
    <div
      key={index}
      className={item.isComplete ? 'todo-row todo-row__complete' : 'todo-row'}
    >
      {
        edit === item.id ?
          <div>
            <input
              className='todo-editinput'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div> :
          <div
            key={item.id}
            onClick={() => completeItem(item.id)}
          >
            {item.text}
          </div>
      }

      {
        edit === item.id ?
        <div>
          <MdOutlineDone
            onClick={() => saveItem(item.id)}
            className='todo-icons'
          />
        </div> :
          <div className='todo-icons'>
            <FiEdit3
              onClick={() => editItem(item.id, item.text)}
            />
            <TiDeleteOutline
              onClick={() => removeItem(item.id)}
            />
          </div>
      }
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
  removeItem: PropTypes.func,
};

export default TodoItem;
