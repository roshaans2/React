import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter,setCounter] = useState(0)

  const increment = () => {
    setCounter(counter => counter+1)
  }

  const decrement = () => {
    setCounter(counter => counter-1)
  }


  return (
    <>
      <h1>Hooks</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
