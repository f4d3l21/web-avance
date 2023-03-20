import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="button-count">
          <Counter />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}


function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  };

  return (
    <div>
      <div className="counter-box">
        <p>Counter 1 is {count1}</p>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
      </div>
      <div className="counter-box">
        <p>Counter 2 is {count2}</p>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
      </div>
      <button onClick={handleClick}>LES 2 +</button>
    </div>
  );
}
export default App
