import { useRef } from 'react'
import './App.css'

function App() {
  const text = useRef('');

  return (
    <>
      <input onChange={e => text.current = e.target.value}></input>
      <button onClick={() => alert(text.current)}>alert</button>
    </>
  )
}

export default App
