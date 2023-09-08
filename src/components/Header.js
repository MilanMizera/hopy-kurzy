import "./header.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <a to="welcome-scoll"  className="nav__link">
            Úvod
          </a>
        </li>

        <li className="nav__item">
          <a to="with-i-work-scoll"  className="nav__link">
            Seznam kurzů
          </a>
        </li>

        <li className="nav__item">
          <a to="first-project-scroll" className="nav__link">
            Předplatné
          </a>
        </li>

        <li className="nav__item">
          <a to="form-scroll"  className="nav__link">
            Kontakt
          </a>
        </li>

        <div className="login-btn-background">
          <Link to="/prihlaseni" className="login-btn">Přihlásit se</Link>
        </div>

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