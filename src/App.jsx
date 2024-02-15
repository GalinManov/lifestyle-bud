import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Create } from './components/Create'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-svh bg-green-100'>
      <NavBar></NavBar>
      <Home></Home>
      <Routes>
        <Route path="/create" element={<Create></Create>}></Route>
      </Routes>
    </div>
  )
}

export default App
