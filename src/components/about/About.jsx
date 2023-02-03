import React from 'react'
import './about.css'
import ME from '/me-about.png'

const About = () => {
    return (
        <section id='about' className='section-about-fix'>
            <h5>Conozca</h5>
            <h2>Sobre mí</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <img src={ME} alt='About Me' className='img__about__me' />
                </div>
                <div className='about__content'>
                    <p>
                        Soy Programador Web Front-end Jr y Back-end Jr en continuo aprendizaje, mi interés actual es sobre Front-end y estudiante de la carrera Certified Tech Developer de Digital House.<br />
                        Certified Tech Developer es una iniciativa educativa co-creada por Digital House, Mercado Libre y Globant para formar Desarrolladores siguiendo los más altos estándares de la industria.
                        El programa enseña los conocimientos técnicos y habilidades blandas que demandan las empresas más disruptivas del sector.<br />
                        Me gusta trabajar en equipos y proyectos diversos que me permitan aprender continuamente sobre diversas tecnologías, métodos y soluciones.<br />
                        Actualmente me desempeño como programador Front-end formando parte de un equipo freelance, enfocado en la construcción de aplicaciones web.<br />
                        Estoy buscando formar parte de una empresa u organización formalmente para aportar mis habilidades, cumplir objetivos y seguir mejorando mis conocimientos.
                    </p>
                    <a href='#contact' className='btn ov-btn-slide-left'>Contactar</a>
                </div>
            </div>
        </section>
    )
}

export default About
