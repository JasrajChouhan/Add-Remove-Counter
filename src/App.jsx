import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(15)
  
  const addValue = () => {
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);
    setCount(prevCounter => prevCounter + 1);

    if(counter >= 20){
        
        alert("You have exceeded the limit");

    }
    
    

  }

  const subtractValue = () => {
    setCount(counter - 1);
    if(counter <= 0){
      alert("You have beyond the limit");

  }
    
  }

  return (
    <>
      
      <h1> <u>Add Remove Counter</u> </h1>
      <h2>Counter Value : {counter} </h2>
      <div className="btn-div">
        <button onClick={addValue} >Add Value {counter} </button>
        <br />
        <button onClick={subtractValue} >Remove Value {counter} </button>

      </div>
      
    </>
  )
}

export default App
