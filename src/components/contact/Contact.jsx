import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a10sqkt', 'template_1dgk7ym', form.current, '6DKRSH1_BgMk__t4s')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

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
        </section>
    )
}
