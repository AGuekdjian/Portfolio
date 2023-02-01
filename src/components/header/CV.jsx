import React from 'react'
import CV from '../../assets/cv.pdf'

const CVitae = () => {


    return (
        <>
            <div className='cv'>
                <a href={CV} download className='btn ov-btn-slide-left' >Descargar CV</a>
                <a href='#contact' className='btn btn-primary'>Contactar</a>
            </div>
        </>
    )
}

export default CVitae
