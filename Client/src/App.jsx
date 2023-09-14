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
import PriceAProduct from './PriceAProduct';
import CreateMetric from './CreateMetric';
import ChannelsAndAudience from './ChannelsAndAudience'
import PriceDefault from './PriceDefaults';
import TaxAndBilling from './TaxAndBilling';
import FinanceAndRevenue from './FinanceAndRevenue';


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
        <Route path= '/PriceAProduct' element = {<PriceAProduct/>}></Route>
        <Route path= '/CreateMetric' element = {<CreateMetric/>}></Route>
        <Route path= '/ChannelsAndAudience' element = {<ChannelsAndAudience/>}></Route>
        <Route path= '/PriceDefault' element = {<PriceDefault/>}></Route>
        <Route path= '/TaxAndBilling' element = {<TaxAndBilling/>}></Route>
        <Route path= '/FinanceAndRevenue' element = {<FinanceAndRevenue/>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App

