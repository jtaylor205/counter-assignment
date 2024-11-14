// import necessary react testing library helpers here
// import the Counter component here
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

// beforeEach(() => {
//   // Render the Counter component here
// })

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  //Makes sure that the counter message is rendered
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countElement = screen.getByTestId('count');
  // Makes sure that the initial count is 0
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  //Increments the counter and checks to make sure it is 1
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  //Decrements the count and checks that is it -1
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('-1');
});