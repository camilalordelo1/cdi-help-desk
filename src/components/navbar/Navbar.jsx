import logo from './../../assets/logo.jpg'
import './navbar.scss'

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo} alt="Tecnologia em Foco" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/"> CDI Help Desk </NavLink>
        </li>
        <li>
          <NavLink to="/atividades-complementares">Atividades Complementares</NavLink>
        </li>
        <li>
          <NavLink to="/duplo-diploma">Duplo diploma</NavLink>
        </li>
        <li>
          <NavLink to="/sistemas-unicamp">Sistemas Unicamp</NavLink>
        </li>
        <li>
          <NavLink to="/iniciacoes">Iniciações</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
