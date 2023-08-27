import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-fix-desktop">
      <h5>Ponte en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="correcion">anthonyguekdjian@gmail.com</h5>
            <a href="mailto:anthonyguekdjian@gmail.com" target="_blank">
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+598 098 452 454</h5>
            <a href="https://wa.me/+598098452454" target="_blank">
              Enviar Mensaje
            </a>
          </article>
        </div>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn ov-btn-slide-left btn-style">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
