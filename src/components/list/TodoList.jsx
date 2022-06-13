import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FiEdit3} from 'react-icons/fi';
import {TiDeleteOutline} from 'react-icons/ti';
import {MdOutlineDone} from 'react-icons/md';

import './todo-list.scss';

const TodoList = ({items, setItems}) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(items);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    itemsFilter();
  }, [items]);

  useEffect(() => {
    itemsFilter();
  }, [activeFilter]);

  const completeItem = (index) => {
    items[index].isComplete = !items[index].isComplete;
    const updated = [...items];

    setItems(updated);
  };

  const removeItem = (index) => {
    items.splice(index, 1);
    const updated = [...items];

    setItems(updated);
  };

  const editItem = (index, text) => {
    setEdit(index);
    setValue(text);
  };

  const saveItem = (index) => {
    items[index].text = value;

    setEdit(null);
  };

  const changeFilter = (type) => {
    if (activeFilter === type) return;
    setActiveFilter(type);

    itemsFilter();
  };

  const itemsFilter = () => {
    if (activeFilter === 'all') {
      setFiltered(items);
    }

    if (activeFilter === 'active') {
      const filteredTodo = [...items].filter((item) =>
        item.isComplete === false);
      setFiltered(filteredTodo);
    }

    if (activeFilter === 'completed') {
      const filteredTodo = [...items].filter((item) =>
        item.isComplete === true);
      setFiltered(filteredTodo);
    }
  };

  return (
    <div>
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
          className={`button-filter
            ${(activeFilter === 'all') ?
            'button-filter__active' : ''}`
          }
          onClick={() => {
            changeFilter('all');
          }}>All</button>
        <button
          className={`button-filter
            ${(activeFilter === 'active') ?
            'button-filter__active' : ''}`
          }
          onClick={() => {
            changeFilter('active');
          }}>Active</button>
        <button
          className={`button-filter
            ${(activeFilter === 'completed') ?
            'button-filter__active' : ''}`
          }
          onClick={() => {
            changeFilter('completed');
          }}>Completed</button>
      </div>
      {
        filtered.map((item, index) => (
          <div
            key={index}
            className={`todo-row ${item.isComplete ?
              'todo-row__complete' : ''}`
            }
          >
            {
              edit === index ?
                <div>
                  <input
                    className='todo-input__edit'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div> :
                <div
                  onClick={() => completeItem(index)}
                  data-testid='complete-item'
                >
                  {item.text}
                </div>
            }

            {
              edit === index ?
              <div>
                <MdOutlineDone
                  onClick={() => saveItem(index)}
                  className='todo-icons'
                />
              </div> :
                <div className='todo-icons'>
                  <FiEdit3
                    onClick={() => editItem(index, item.text)}
                  />
                  <TiDeleteOutline
                    onClick={() => removeItem(index)}
                    data-testid='remove-item'
                  />
                </div>
            }
          </div>
        ))
      }
    </div>
  );
};

TodoList.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        isComplete: PropTypes.bool,
      }),
  ),
  setItems: PropTypes.func,
};

export default TodoList;
