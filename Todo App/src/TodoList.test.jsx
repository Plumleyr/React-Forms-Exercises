import {render, fireEvent, screen } from '@testing-library/react'
import TodoList from './TodoList'
import { expect, it } from 'vitest'

it("renders without crashing", () => {
  render(<TodoList />)
});

it("Matches the snapshot", () => {
  const {asFragment} = render(<TodoList/>)
  expect(asFragment()).toMatchSnapshot();
});

it("creates a todo", () => {
  render(<TodoList/>)
  const todoInput = screen.getByPlaceholderText("todo")
  const createButton = screen.getByText('Create Todo')
  
  fireEvent.change(todoInput, {target: {value: 'Go to gym'}})
  fireEvent.click(createButton)
  
  const todo = screen.getByTestId('todo-0')
  expect(todo).toHaveTextContent('Go to gym')
  
  const deleteButton = screen.getByText('x')
  fireEvent.click(deleteButton)
  expect(todo).not.toBeInTheDocument();
});