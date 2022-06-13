import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import TodoList from './TodoList';

let myItems;
let mySetItems;
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  mySetItems = jest.fn();
  myItems = [
    {
      text: 'complete Javascript',
      isComplete: false,
    },
    {
      text: 'read for one hour',
      isComplete: false,
    },
    {
      text: 'code',
      isComplete: false,
    },
  ];
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('TodoList', () => {
  it('should be rendered', () => {
    act(() => {
      render(<TodoList items={myItems} setItems={mySetItems} />, container);
    });
  });

  it('should remove first item of items', () => {
    act(() => {
      render(
          <TodoList items={myItems} setItems={mySetItems} />, container,
      );
    });

    const btn = screen.getAllByTestId('remove-item')[0];
    const testResult = [
      {
        text: 'read for one hour',
        isComplete: false,
      },
      {
        text: 'code',
        isComplete: false,
      },
    ];

    fireEvent.click(btn);

    expect(mySetItems).toHaveBeenCalledTimes(1);
    expect(mySetItems).toHaveBeenCalledWith(testResult);
  });

  it('should set first item of items as completed item', () => {
    act(() => {
      render(
          <TodoList items={myItems} setItems={mySetItems} />, container,
      );
    });

    const btn = screen.getAllByTestId('complete-item')[0];
    const testResult = [
      {
        text: 'complete Javascript',
        isComplete: true,
      },
      {
        text: 'read for one hour',
        isComplete: false,
      },
      {
        text: 'code',
        isComplete: false,
      },
    ];

    fireEvent.click(btn);

    expect(mySetItems).toHaveBeenCalledTimes(1);
    expect(mySetItems).toHaveBeenCalledWith(testResult);
  });
});
