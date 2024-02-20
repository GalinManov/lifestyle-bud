import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Create } from './components/Create'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <div className='h-svh bg-green-100'>
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  )
}

export default App
