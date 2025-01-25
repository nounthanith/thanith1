import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>  
      <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                    </Route>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App