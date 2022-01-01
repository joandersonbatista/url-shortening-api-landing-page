import React from "react";

import "./header.css";
import LogoSVG from "../images/logo.svg";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  document.getElementsByTagName("html")[0].style.overflow = open
    ? "hidden"
    : "initial";

  return (
    <div className="main-content">
      <header className="header">
        <img src={LogoSVG} alt="logo-site" />
        <a className="menu-toggle" onClick={() => setOpen(!open)} href="#s">
          <div className="qual-foi" />
          <div className="qual-foi" />
          <div className="qual-foi" />
        </a>
        <nav className={!open ? "drop-dow" : ""}>
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
          <div className="line" />
          <ul>
            <li>
              <a href="#features" className="button_nav">
                Login
              </a>
            </li>
            <li>
              <button type="button">Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
