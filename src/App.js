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
          backgroundColor: buttonColor === 'red' ? 'red' : 'blue',
          color: buttonColor === 'red' ? 'black' : 'white',
        }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        label='disable/enable button'
        defaultChecked={disabled}
        aria-checked={disabled}
        /* onChange={() => {
          setDisabled(!disabled);
        }} */
        onChange={e => {
          setDisabled(e.target.checked);
        }}
      />
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
