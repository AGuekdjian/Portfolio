import React from "react";
import "./about.css";
import ME from "/me-about.png";

const About = () => {
  return (
    <section id="about" className="section-about-fix">
      <h5>Conozca</h5>
      <h2>Sobre mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Me" className="img__about__me" />
        </div>
        <div className="about__content">
          <p>
            Soy un apasionado Desarrollador Full Stack enfocado en el Desarrollo
            Web y Cloud Computing.
            <br />
            Amante de tecnologías modernas y el trabajo en equipo. Comprometido
            con entregar productos de calidad, con código limpio y sostenible.
            Siempre aprendiendo, adaptable y motivado por alcanzar nuevos
            logros.
            <br />
            Me gusta trabajar en equipos y proyectos diversos que me permitan
            estar continuamente aprendiendo sobre diversas tecnologías, métodos
            y soluciones.
            <br />
            Actualmente soy estudiante de la carrera Certified Tech Developer
            (Certificado en Desarrollo de Software) de Digital House y UTEC
            (Universidad Técnologica del Uruguay).
            <br />
            Certified Tech Developer (Certificado en Desarrollo de Software) es
            una iniciativa educativa co-creada por Digital House, Mercado Libre
            y Globant para formar Desarrolladores siguiendo los más altos
            estándares de la industria. El programa enseña los conocimientos
            técnicos y habilidades blandas que demandan las empresas más
            disruptivas del sector.
            <br />
            Mi objetivo actualmente es aprender sobre DevOps (Infraestructura
            como código (IaC), Automatización) y Cloud Computing.
          </p>
          <a href="#contact" className="btn ov-btn-slide-left">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
