import React from 'react'
import CVitae from './CV'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {

    return (
        <header>
            <div className='container header__container'>
                <div className='header__content'>
                    <h1>Anthony Guekdjian</h1>
                    <h5 className='text-light size-fix'>Front-end Developer Jr.</h5>
                    <CVitae />
                </div>
                <HeaderSocials />
            </div>
        </header>
    )
}

export default Header