import './App.css'
import Film from './components/Film.jsx'
import Pet from './Pet.jsx'
import FilmAdd from './components/FilmAdd.jsx'
import FilmCard from './components/FilmCard.jsx'
import { useState } from 'react'
import FilmForm from './components/FilmForm.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Catalog from './pages/About.jsx'
import PreMain from './pages/PreMain.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import UsersList from './pages/Users.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PreMain />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='*' element={<PreMain />} />
        <Route path='/Users' element={<UsersList />} />
      </Routes>
    </>
  )
}

export default App
