import React, { useState } from 'react'
import CV from '../../assets/cv.pdf'
import { Link } from 'react-router-dom'

const CVitae = () => {

    // const [state, setState] = useState(false)

    return (
        <>
            <div className='cv'>
                <a href={CV} download className='btn ov-btn-slide-left' >Download CV</a>
                <Link to='/contact' className='btn btn-primary' onClick={() => setState(true)}>Let's Talk</Link>
            </div>

            {/* {state && (
                <div className='modal'>
                    <div className='overlay' onClick={() => setState(false)}></div>
                    <div className='contact__container'>
                        <div className='container contact__container'>
                            <div className='contact__options'>
                                <article className='contact__option'>
                                    <MdOutlineEmail className='contact__option-icon' />
                                    <h4>Email</h4>
                                    <h5 className='correcion'>anthonyguekdjian@gmail.com</h5>
                                    <a href='mailto:anthonyguekdjian@gmail.com' target='_blank'>Send a message</a>
                                </article>
                                <article className='contact__option'>
                                    <FaWhatsapp className='contact__option-icon' />
                                    <h4>Whatsapp</h4>
                                    <h5>+598 098 452 454</h5>
                                    <a href='https://wa.me/+598098452454' target='_blank'>Send a message</a>
                                </article>
                            </div>

                            <form ref={form} onSubmit={sendEmail}>
                                <input type='text' name='name' placeholder='Your Full Name' required />
                                <input type='email' name='email' placeholder='Your Email' required />
                                <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                                <button type='submit' className='btn ov-btn-slide-left btn-style'>Send Message</button>
                            </form>
                        </div>
                        <button className='close-modal' onClick={() => setModal(false)}>Close</button>
                    </div>
                </div>
            )} */}
        </>
    )
}

export default CVitae
