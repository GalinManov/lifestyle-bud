import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Create } from './components/Create'
import { Details } from './components/Details'
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
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  )
}

export default App
