import {render, fireEvent, screen} from '@testing-library/react'
import NewTodoForm from './NewTodoForm'
import { expect, it, vi } from 'vitest'

it('should render without crashing', () => {
  render(<NewTodoForm/>)
})

it('should match snapshot', () => {
  const {asFragment} = render(<NewTodoForm/>);
  expect(asFragment()).toMatchSnapshot();
})

it('should call addBox with appropriate information', () => {
  const addTodoMock = vi.fn()

  render(<NewTodoForm addTodo={addTodoMock}/>)

  fireEvent.change(screen.getByPlaceholderText('todo'), {
    target: {value: 'take out trash'}
  });

  fireEvent.click(screen.getByText('Create Todo'))

  expect(addTodoMock).toHaveBeenCalledTimes(1);
  expect(addTodoMock).toHaveBeenCalledWith({
    todo: 'take out trash'
  });
});