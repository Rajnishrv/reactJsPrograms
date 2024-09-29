import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
     <h1>Password Generator</h1>
     <form>
      <input type='txt'></input>
      <input type='checkbox'></input>
      <input type='checkbox'></input>
     </form>
    </>
  )
}

export default App
