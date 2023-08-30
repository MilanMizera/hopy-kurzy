import "./header.css"
import React, { useState } from "react";

const Header = () => {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">

      <a className="nav__brand">
       Hopy-kurzy
      </a>

      <ul className={active}>
        <li className="nav__item">
          <a to="welcome-scoll" spy={true} smooth={true} offset={50} duration={500} className="nav__link">
            Úvod
          </a>
        </li>

        <li className="nav__item">
          <a to="with-i-work-scoll" spy={true} smooth={true} offset={50} duration={500} className="nav__link">
            Seznam kurzů
          </a>
        </li>

        <li className="nav__item">
          <a to="first-project-scroll" spy={true} smooth={true} offset={50} duration={500} className="nav__link">
            Předplatné
          </a>
        </li>

        <li className="nav__item">
          <a to="form-scroll" spy={true} smooth={true} offset={50} duration={500} className="nav__link">
            Kontakt
          </a>
        </li>
        <a className="login-btn">Přihlásit se</a>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header