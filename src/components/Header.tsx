import React from "react";

import "./header.css";
import LogoSVG from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header main-content">
      <img src={LogoSVG} alt="logo-site" />
      <nav>
        <ul>
          <li>
            <a href="#features" className="button_nav">
              Features
            </a>
          </li>
          <li>
            <a href="#Pricing" className="button_nav">
              Pricing
            </a>
          </li>
          <li>
            <a href="#Resources" className="button_nav">
              Resources
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#features" className="button_nav">
              Login
            </a>
          </li>
          <li>
            <a href="#Pricing" className="sign-button">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
