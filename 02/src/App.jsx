import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
;
  const addValue = () => {
    if (count < 20){
    console.log("value added")
    setCount(count + 1)
  } else{
      setCount(20)
      alert('Maximum Amount Reached')
    } 
  }
  const removeValue = () => {
    if (count > 0){
    setCount(count - 1)
    } else  {
      setCount(0)
      alert('Minimum Amount Reached')
    }
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>Counter value:{count}</h2>


     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
// 