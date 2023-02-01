import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/anthony-guekdjian/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/AGuekdjian' target='_blank'><FaGithub /></a>
            <a href='mailto:anthonyguekdjian@gmail.com' target='_blank'><MdOutlineEmail /></a>
        </div>
    )
}

export default HeaderSocials
