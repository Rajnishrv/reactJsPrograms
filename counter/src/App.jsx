import { useState } from 'react';
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(counter + 1)
  }
  const remValue = () => {
    if (counter>0) {
      setCounter(counter - 1);
    }
  }
  
  return (
    <>
      <h1>counter {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >add value</button>
      <br />
      <button onClick={remValue}>remove value</button>
    </>
  )
}

export default App
