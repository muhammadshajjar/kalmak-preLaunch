import React from "react";
import logo from "../assets/Logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="company logo" />
      </div>
      <ul className="social">
        <a
          href="https://web.facebook.com/kalmakcamps?mibextid=LQQJ4d&_rdc=1&_rdr"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaFacebookF />
          </li>
        </a>
        <a
          href="https://www.instagram.com/kalmak_camps/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaInstagram />
          </li>
        </a>
        <a
          href="https://twitter.com/kalmakcamps?t=gLK2v7lSe-9aQ9kt3YU0IA&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaTwitter />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/company/kalmak-camps/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaLinkedinIn />
          </li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
