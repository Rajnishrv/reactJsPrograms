import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "red" }}
          >Read</button>
          <button
            onClick={() => setColor("green")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("blue")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "blue" }}
          >Blue</button>

          <button
            onClick={() => setColor("cyan")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "cyan" }}
          >Cyan</button>

          <button
            onClick={() => setColor("#7FFF00")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "#7FFF00" }}
          >Chartreuse</button>

          <button
            onClick={() => setColor("#FF7F50")}
            className='outline-none rounded-full py-1 px-4 text-white shadow-sm'
            style={{ backgroundColor: "#FF7F50" }}
          >Coral</button>
        </div>
      </div>
    </div>
  )
}
export default App