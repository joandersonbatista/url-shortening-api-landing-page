import React from "react";
import { CSSTransition } from "react-transition-group";

import "./header.css";
import LogoSVG from "../images/logo.svg";

interface NavProps {
  classType: string;
  nodeRef?: React.MutableRefObject<null>;
}

function Nav({ classType, nodeRef }: NavProps) {
  return (
    <nav className={classType} ref={nodeRef}>
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
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  document.getElementsByTagName("html")[0].style.overflowY = open
    ? "hidden"
    : "initial";

  const nodeRef = React.useRef(null);

  return (
    <div className="main-content">
      <header className="header">
        <img src={LogoSVG} alt="logo-site" />
        <a className="menu-toggle" onClick={() => setOpen(!open)} href="#s">
          <div className="qual-foi" />
          <div className="qual-foi" />
          <div className="qual-foi" />
        </a>
        <Nav classType="desktop-nav" />
        <CSSTransition
          in={open}
          timeout={300}
          classNames="drop"
          unmountOnExit
          nodeRef={nodeRef}
        >
          <Nav classType="mobile-nav" nodeRef={nodeRef} />
        </CSSTransition>
      </header>
    </div>
  );
}
