import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>A creative and modern website from very scratch using latest web technologies.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Modern technologies like React, JavaScript, CSS3, and Bootstrap Framework.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>A fully responsive website that will look perfect on all the small & wide screens.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I will use Web fonts, colors & icons, Web tools, Web animations, CSS3 media queries, Responsive layout, Optimizing website.</p>
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
