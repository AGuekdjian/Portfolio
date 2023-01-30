import React from 'react'
import './about.css'
import ME from '../../../public/me-about.png'

const About = () => {
    return (
        <section id='about'>
            <h5>Conozca</h5>
            <h2>Sobre mí</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <img src={ME} alt='About Me' className='img__about__me' />
                </div>
                <div className='about__content'>
                    <p>
                        Me gusta trabajar en equipos y proyectos diversos
                        que me permitan aprender continuamente sobre
                        diversas tecnologías, métodos y soluciones.
                        Actualmente, estoy enfocado en la construcción
                        de aplicaciones web. <br />
                        Soy una persona que ama los desafíos, que no se
                        rinde fácilmente, responsable, detallista y
                        autodidacta. <br />
                        Por eso he decidido dedicarme a la programación,
                        ya que es un mundo donde se valoran estas
                        capacidades.
                    </p>
                    <a href='#contact' className='btn ov-btn-slide-left'>Contactar</a>
                </div>
            </div>
        </section>
    )
}

export default About
