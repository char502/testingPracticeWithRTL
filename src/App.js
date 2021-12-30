import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  // Regular expression, if you find a capital letter in the middle of a word (\B .... \B)
  // and even if you find it multiple times (g), do this for every time you find it
  // replace it with whatever letter you found (' $1'), preceded by a space
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const colourForButtonText = replaceCamelWithSpaces(newButtonColor);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '24em',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{
          maxWidth: '50%',
          backgroundColor: disabled ? 'gray' : buttonColor,
          color: 'white',
        }}
        disabled={disabled}
      >
        Change to {colourForButtonText}
      </button>
      <input
        type='checkbox'
        id='disable/enable button'
        /* IDs are good when you plan on doing some sort of client-side work on the element, as an element that has an ID can easily and quickly be retrieved by Javascript. It is also good when you are using <label> elements, as you can then use the for attribute (which takes an ID) to point to the field. */
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={() => {
          setDisabled(disabled => !disabled);
        }}
        /* onChange={e => {
          setDisabled(e.target.checked);
        }} */
      />
      <label htmlFor='disable/enable button'>Disable Button</label>
    </div>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
}
