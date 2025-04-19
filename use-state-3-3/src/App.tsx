import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10);
  const decrement = () => {
      setCount(count-1);
  };

  const increment = () => {
      setCount(count+1);
  }

  return (
    <>
        <p>Count : {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </>
  )
}

export default App
