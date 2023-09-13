import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';


import SignUp from './SignUp'
import NavBar from './NavBar'
import Login from './Login'
import Footer from './Footer'
import Home from './Home'
import MyCatalog from './MyCatalogs';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/register' element= {<SignUp />}></Route>
        <Route path = '/' element= {<Login />}></Route>
        <Route path = '/home' element = {<Home/>}></Route>
        <Route path= '/Mycatalog' element = { <MyCatalog/> }></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App

