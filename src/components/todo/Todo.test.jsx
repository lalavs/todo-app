import React from 'react';
import {render, screen} from '@testing-library/react';

import Todo from './Todo';

describe('Todo', () => {
  it('shoud be rendered', () => {
    render(<Todo />);

    expect(screen.getByText(/todos/i));
  });
});
