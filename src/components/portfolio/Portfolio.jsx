import React from 'react'
import './portfolio.css'
import { data } from './projects'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='portfolio__container'>
                {data.map(({ id, name, description, img, url, github }) => {
                    return (
                        <article key={ id } className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <a href={ url } target='_blank'>
                                    <img src={ img } alt={ description } />
                                </a>
                            </div>
                            <h3>{ name }</h3>
                            <div className='portfolio__item-cv'>
                                <a href={ github } className='btn ov-btn-slide-left' target='_blank'>Github</a>
                                <a href={ url } className='btn btn-primary' target='_blank'>Show</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}


