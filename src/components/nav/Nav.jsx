import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const [activeNav, setActiveNav ] = useState('/')

    return (
        <nav>
            <NavLink to='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome /></NavLink>
            <NavLink to='/about' onClick={() => setActiveNav('/about')} className={activeNav === '/about' ? 'active' : ''}><AiOutlineUser /></NavLink>
            <NavLink to='/experience' onClick={() => setActiveNav('/experience')} className={activeNav === '/experience' ? 'active' : ''}><BiBook /></NavLink>
            <NavLink to='/services' onClick={() => setActiveNav('/services')} className={activeNav === '/services' ? 'active' : ''}><RiServiceLine /></NavLink>
            <NavLink to='/contact' onClick={() => setActiveNav('/contact')} className={activeNav === '/contact' ? 'active' : ''}><BiMessageSquareDetail /></NavLink>
        </nav>
    )
}

export default Nav
