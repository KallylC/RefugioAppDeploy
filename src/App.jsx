import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDhjenUwc2x1b3pzem9mOWh1Mnlsc2JtM2lqYWJkajkyYzc5c2hxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif"  alt="gif de gato"/>
      </div>

      <h1>xablau</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          contador é: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Rick é viado
      </p>
    </>
  )
}

export default App
