import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Create } from './components/Create'
import { Details } from './components/Details'
import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContext'
import { GlobalContext } from './contexts/GlobalContext'
import './App.css'

function App() {


  return (
    <div className='sm:min-h-svh bg-green-100'>
      <GlobalContextProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </GlobalContextProvider>

    </div>
  )
}

export default App
