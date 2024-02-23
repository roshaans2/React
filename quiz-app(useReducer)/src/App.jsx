import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Sub from './Sub'
import Loader from './Loader'
import StartScreen from './StartScreen'

const initialState = {
  questions:[],
  status:"loading"
}

function reducer(state,action){
  switch(action.type){
    case 'dataReceived':
      return {
        ...state,
        questions:action.payload,
        status:"ready"
      }

    case 'dataFailed':
      return {
        ...state,
        status:"error"
      }

    default:
      throw new Error("Action unknown")
  }
}

function App() {

  const [{questions,status},dispatch] = useReducer(reducer,initialState)
  const numQuestions = questions.length
  console.log(questions)
  
  useEffect(()=>{
    fetch("http://localhost:8000/questions").then(res => res.json()).then(data => dispatch({type:'dataReceived',payload:data})).catch(err => dispatch({type:'dataFailed'}))
  },[])

  return (
    <div className='app'>
      <Header/>
      <Sub>
        {status === "loading" && <Loader/>}
        {status === "error" && <Error/>}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
      </Sub>
    </div>
  )
}

export default App
