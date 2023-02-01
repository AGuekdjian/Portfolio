import React, { useState } from 'react'
import CV from '../../assets/cv.pdf'

const CVitae = () => {

    // const [state, setState] = useState(false)

    return (
        <>
            <div className='cv'>
                <a href={CV} download className='btn ov-btn-slide-left' >Descargar CV</a>
                <a href='#contact' className='btn btn-primary' onClick={() => setState(true)}>Contactar</a>
            </div>
        </>
    )
}

export default CVitae
