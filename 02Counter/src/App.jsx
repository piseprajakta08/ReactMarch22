import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setcounter]=useState(5);
let [counter2,setcounter2]=useState(5);
const addCount=()=>{
  setcounter(counter+1)
}
const rCount=()=>{
  setcounter(counter-1)
}
  
  
return(
   <>
   <h1>React</h1>
   <h2>Counter Value:{counter}</h2>
   <button onClick={addCount}>Add</button><br/>
   <button onClick={rCount}>Remove</button>
   </>
  )
}

export default App
