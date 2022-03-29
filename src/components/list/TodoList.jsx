import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FiEdit3} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdOutlineDone} from 'react-icons/md';

import './todo-list.scss';

const TodoItem = ({items, setItems}) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(items);

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const completeItem = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setItems(updatedItems);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

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

  const itemsFilter = (isComplete) => {
    if (isComplete === 'all') {
      setFiltered(items);
    } else {
      const filteredTodo = [...items].filter((item) =>
        item.isComplete === isComplete);
      setFiltered(filteredTodo);
    }
  };


  return (
    <div>
      {
        filtered.map((item, index) => (
          <div
            key={index}
            className={item.isComplete ?
              'todo-row todo-row__complete' :
              'todo-row'}
          >
            {
              edit === item.id ?
                <div>
                  <input
                    className='todo-input__edit'
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
        ))
      }
      <div className='todo-filter'>
        <div>
          {
            filtered.length !== 1 ?
              <div>
                {filtered.length} items left
              </div> :
              <div>
                {filtered.length} item left
              </div>
          }
        </div>
        <button
          className={isActive ?
          'button-filter__active' :
          'button-filter'}
          onClick={() => {
            itemsFilter(false);
            toggleClass();
          }}>Active</button>
        <button onClick={() => itemsFilter('all')}>All</button>
        {/* <button onClick={() => itemsFilter(false)}>Active</button> */}
        <button onClick={() => itemsFilter(true)}>Completed</button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        isComplete: PropTypes.bool,
      }),
  ),
  setItems: PropTypes.func,
};

export default TodoItem;
