import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route,Link, BrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import Selection from './components/Home'
import LogIn from './components/LogIn'
import Acticity from './components/Activity'
import Volunteer from './components/Volunteer'

function App(props){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Selection/>}/>
      <Route path='/sign-up' element={<SignIn/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
      <Route path='/activity' element={<Acticity/>}/>
      <Route path='/Volunteer' element={<Volunteer/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
