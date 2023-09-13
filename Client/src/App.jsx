import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import SignUp from './SignUp'
import NavBar from './NavBar'
import Login from './Login'
import Footer from './Footer'
import Home from './Home'
import MyCatalog from './MyCatalogs';
import CreateNewProduct from './pages/product/createNewProduct';
import CreatePriceRules from './pages/pricerules/createpricerules';


function App() {

  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = '/register' element= {<SignUp />}></Route>
        <Route path = '/' element= {<Login />}></Route>
        <Route path = '/home' element = {<Home/>}></Route>
        <Route path='/Mycatalog' element={<MyCatalog />}></Route>
        <Route path= '/createproduct' element = { <CreateNewProduct/> }></Route>
        <Route path= '/createproduct' element = { <CreateNewProduct/> }></Route>
        <Route path= '/createPriceRules' element = { <CreatePriceRules/> }></Route>

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App

