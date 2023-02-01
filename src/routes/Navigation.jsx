import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import Header from '../pages/Header/Header'
import About from '../pages/About/About'
import Experience from '../pages/Experience/Experience'
import Portfolio from '../pages/Portfolio/Portfolio'
import Contact from '../pages/Contact/Contact'
import Error404 from '../pages/Error404/Error404'



const Navigation = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />} />

            <Route path='/about' element={<About />} />

            <Route path='/experience' element={<Experience />} />

            <Route path='/portfolio' element={<Portfolio />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error404 />} />

        </Routes>
    )
}

export default Navigation