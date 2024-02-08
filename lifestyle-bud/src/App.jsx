import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-svh'>
      <NavBar></NavBar>
      <Home></Home>
    </div>
  )
}

export default App
