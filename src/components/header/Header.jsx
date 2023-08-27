import React, { useRef, useEffect } from "react";
import CVitae from "./CV";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import Typed from "typed.js";

const Header = () => {
  const title = useRef(null);

  useEffect(() => {
    const titleTyped = new Typed(title.current, {
      strings: [
        "Full Stack Developer.",
        "Front-end Developer.",
        "Back-end Developer.",
        "Software Developer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 200,
      loop: true,
    });

    return () => {
      titleTyped.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <div className="header__content">
          <h1>Anthony Guekdjian</h1>
          <span className="text-light size-fix" ref={title} />
          <CVitae />
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
