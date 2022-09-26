import React from 'react'
import './about.css'
import ME from '../../../public/me-about.png'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <img src={ME} alt='About Me' />
                </div>

                <div className='about__content'>
                    <p>
                        I am a person who loves challenges and does not give up easily. <br />
                        Very detailed and self-taught every day, I never stop learning, <br />
                        I am responsible. I like to work in a team and continually learn about various technologies. Basic English level. 
                        Currently, I am focused on building responsive web applications.<br /><br />
                        At the moment I am looking to join as a junior developer to show off my skills and keep improving my knowledge.
                    </p>

                    <NavLink to='/contact' className='btn ov-btn-slide-left'>Let's Talk</NavLink>
                </div>
            </div>
        </section>
    )
}

export default About
