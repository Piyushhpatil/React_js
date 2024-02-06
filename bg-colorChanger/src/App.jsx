import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <button>Yellow</button>
      <button>Red</button>
      <button>White</button>
      <button>Black</button>
      <button>color</button>
      <button>color</button>
      <button>color</button>
      </div>
    </>
  )
}

export default App
