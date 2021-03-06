import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

// remember: arrange/act/assert

// ===========================
// tests for section 2
// ===========================

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colorButton);

  // Expect the background color to change to blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // Expect the button text to be 'Change to Red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkButton = screen.getByRole('checkbox', {
    label: 'disable/enable button',
  });

  // The checkbox starts out unchecked (false)
  expect(checkButton).not.toBeChecked();
  // The button starts out enabled
  expect(colorButton).toBeEnabled();
});

test('checkbox changes button to disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkButton = screen.getByRole('checkbox', {
    label: 'disable/enable button',
  });

  fireEvent.click(checkButton);

  // The checkbox is now checked (true)
  expect(checkButton).toBeChecked();
  // The button is now disabled
  expect(colorButton).toBeDisabled();
});

test('button is re-enabled on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkButton = screen.getByRole('checkbox', {
    label: 'disable/enable button',
  });

  // check then uncheck the checkbox
  fireEvent.click(checkButton);
  fireEvent.click(checkButton);

  // The checkbox is now checked (true)
  expect(checkButton).not.toBeChecked();
  // The button is now disabled
  expect(colorButton).toBeEnabled();
});

test('button turns gray when disabled, red when re-enabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkButton = screen.getByRole('checkbox', {
    label: 'disable/enable button',
  });

  // check then uncheck the checkbox
  fireEvent.click(checkButton);

  expect(checkButton).toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkButton);

  expect(checkButton).not.toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('change the button color then disable/re-enable', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  });
  const checkButton = screen.getByRole('checkbox', {
    label: 'disable/enable button',
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(checkButton);

  expect(checkButton).toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkButton);

  expect(checkButton).not.toBeChecked();
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

// ===========================
// test for section 1
// ===========================

// ===========================
// Uncomment to activate section 1 test
// ===========================

// test('renders learn react link', () => {
//   // creates a virtual DOM for whatever JSX you give it as the argument
//   render(<App />);
//   // you access the virtual DOM with the 'screen' global object
//   // run a method from the screen object called 'getByText'
//   // This will find an element in the DOM based on whatever text it's displaying
//   // /learn react/i this is a reg expression, could eb string 'learn react' and case insensitive
//   // for regex /^learn react$/i this means the beginning and the end of the text (so won't find 'learn reacts' (s on the end) for example)
//   const linkElement = screen.getByText(/learn react/i);
//   // ===========================
//   // ===========================
//   // Can also use getByRole (this is the best one to use wherever possible as this is a good check that elements are accessible to screen readers):
//   // const linkElement = screen.getByRole('link', { name: /learn react/i });
//   // ===========================
//   // ===========================
//   // assertion which causes the test to succeed or fail
//   // expect - a Jest global which starts the assertion
//   // linkElement - expect argument, this is what you are asserting against
//   // this is what Jest will examine to see if it meets our expectations
//   // toBeInTheDocument - this is a matcher (assertion type) (may or may not take an argument)
//   expect(linkElement).toBeInTheDocument();
// });

// ===========================
// End of Uncomment for activate section 1 test
// ===========================

// ===========================
// More assertion examples
// ===========================

// expect(element.textContent).toBe('hello);
// expect(elementsArray).toHaveLength(7);

// ===========================
// jest-dom
// ===========================

// comes with crete-react-app
//  uses src/setupTests.js to import jest-dom before each test
// this makes the matchers available for every test
// DOM-based matcher examples: toBeVisible() (in the DOM), toBeChecked() (a checkbox)
