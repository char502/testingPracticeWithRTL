import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

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
        Change to {newButtonColor}
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
