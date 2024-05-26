import { useState } from 'react'
import './App.css'
import Store from './components/Store/Store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Store />
  )
}

export default App
