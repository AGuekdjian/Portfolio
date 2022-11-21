import React from 'react'
import './testimonials.css'
import { data } from './data'

import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Revisión de los clientes</h5>
            <h2>Testimonios</h2>

            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}>
                {
                    data.map(({ id, avatar, name, puesto, review }) => {
                        return (
                            <SwiperSlide key={id} className='testimonial'>
                                <div className='client__avatar'>
                                    <img src={avatar} alt='avatar 1' />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <h5 className='client__puesto'>{puesto}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
