import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import TodoForm from './TodoForm';

describe('TodoForm', () => {
  it('shoud be rendered', () => {
    render(<TodoForm />);
  });

  it('should call setItems', () => {
    const myItems = [];
    const mySetItems = jest.fn();
    render(<TodoForm items={myItems} setItems={mySetItems} />);
    const testItem = {
      text: 'go for a walk',
      isComplete: false,
    };

    const input = screen.getByPlaceholderText('Create a new todo...');
    const btn = screen.getByTestId('todo-button');

    fireEvent.change(input, {target: {value: testItem.text}});
    expect(input.value).toBe(testItem.text);

    fireEvent.click(btn);
    expect(mySetItems).toHaveBeenCalledTimes(1);
    expect(mySetItems).toHaveBeenCalledWith([testItem]);
  });
});
