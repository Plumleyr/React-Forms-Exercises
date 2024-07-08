import {render} from '@testing-library/react'
import Todo from './Todo'
import { expect, it } from 'vitest'

it('should render without crashing', () => {
  render(<Todo todo={'go swimming'}/>);
});

it('should match snapshot', () => {
  const {asFragment} = render(<Todo todo={'go swimming'}/>);
  expect(asFragment()).toMatchSnapshot();
});