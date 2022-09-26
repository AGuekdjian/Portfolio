import React from 'react'
import './error.css'
import { HiOutlineEmojiSad } from 'react-icons/hi'

const Error = () => {
    return (
        <section className='container error__container'>
            <div className='error__content'>
                <HiOutlineEmojiSad className='error__icon'/>
                <h1><span>Error 404</span> page not found</h1>
            </div>
        </section>
    )
}

export default Error
