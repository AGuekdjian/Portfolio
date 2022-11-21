import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>Que ofresco</h5>
            <h2>Servicios</h2>

            <div className='services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Desarrollo Web</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Un sitio web creativo, moderno y optimizado desde cero utilizando las últimas tecnologías web.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Tecnologías modernas como React, JavaScript, CSS3 y Bootstrap Framework.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Un sitio web totalmente receptivo que se verá perfectamente en todas las pantallas pequeñas y anchas.</p>
                        </li>
                    </ul>
                </article>

                {/* <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </li>
                    </ul>
                </article> */}
            </div>
        </section>
    )
}

export default Services
