import React, { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

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
        disabled={isChecked === true ? true : false}
      >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        label='disable/enable button'
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
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
