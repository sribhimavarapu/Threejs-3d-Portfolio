import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import  {Footer, Navbar} from "./components";
import {Home, About, Projects, Contact} from "./pages";


const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer/>
        </Router>
    </main>
  )
}

export default App