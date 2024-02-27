import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sub from './components/Sub'
import Loader from './components/Loader'
import StartScreen from './components/StartScreen'
import Question from './components/Question'

const initialState = {
  questions:[],
  status:"loading",
  index:0
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

    case 'start':
      return {
        ...state,
        status:"active"
      }

    default:
      throw new Error("Action unknown")
  }
}

function App() {

  const [{questions,status,index},dispatch] = useReducer(reducer,initialState)
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
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
        {status === "active" && <Question question={questions[index]}/>}
      </Sub>
    </div>
  )
}

export default App
