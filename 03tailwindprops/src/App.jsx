import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Props from './components/Props'

function App() {
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>React + Tailwind</h1>
      <Card username="Roshaan" post="Full stack Engineer" imgSrc = "https://images.pexels.com/photos/13063313/pexels-photo-13063313.jpeg?auto=compress&cs=tinysrgb&w=400"/>
      <Props name="Roshaan" age="21"/>
    </>
  )
}

export default App
