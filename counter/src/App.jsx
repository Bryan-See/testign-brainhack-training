import { useState } from 'react'
import './App.css'

function App() {

  //state variable
  //count starts at 0
  //setCount is how u change the count variable
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count+1)
    //setCount(prev => prev + 1) //prevents batch updates (good)
  }

  function decreaseCount() {
    setCount(count-1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increaseCount}>Click to increase</button>
      <button onClick={decreaseCount}>Click to decrease</button>
      <button onClick={resetCount}>Click to reset</button>

    </>
  )
}

export default App
