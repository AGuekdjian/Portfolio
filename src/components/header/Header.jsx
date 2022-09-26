import React from 'react'
import CVitae from './CV'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    return (
        <header>
            <div className='container header__container'>
                <div className='header__content'>
                    <h5>Hello I'm</h5>
                    <h1>Anthony Guekdjian</h1>
                    <h5 className='text-light'>Front-end Developer Jr.</h5>
                    <CVitae />
                </div>
                <HeaderSocials />
            </div>
        </header>
    )
}

export default Header