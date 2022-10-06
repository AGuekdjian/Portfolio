import React from 'react'
import './about.css'
import ME from '../../../public/me-about.png'

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
                    I am a person who loves challenges, who does not give up easily, responsible, detail-oriented and self-taught.<br/>
                    That's why I decided to dedicate myself to programming, as it is a world where these skills are valued.<br/>
                    I like to work in diverse teams and projects that allow me to continuously learn about different technologies, methods and solutions.<br/> 
                    Currently, I am focused on building web applications and I am looking to join a committed, dynamic and motivated team to contribute my skills and continue improving my knowledge.<br/>

                    </p>

                    <a href='#contact' className='btn ov-btn-slide-left'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
