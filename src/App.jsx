import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"

import Footer from "./Components/Footer"
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'



function App() {


  return (
    <div style={{backgroundColor:"#072027"}} >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
    
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
