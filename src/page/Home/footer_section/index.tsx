import React from "react";

import "./style.css";
import { ReactComponent as LogoSvg } from "../../../images/logo.svg";
import { ReactComponent as IconFacebook } from "../../../images/icon-facebook.svg";
import { ReactComponent as IconInstagram } from "../../../images/icon-instagram.svg";
import { ReactComponent as IconTwitter } from "../../../images/icon-twitter.svg";
import { ReactComponent as Iconpinterest } from "../../../images/icon-pinterest.svg";

export default function FooterSection() {
  return (
    <div className="bg-very-dark-violet">
      <div className="main-content">
        <footer className="footer-section">
          <div>
            <LogoSvg />
          </div>
          <div className="footer-links">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#s">Link Shortening</a>
              </li>
              <li>
                <a href="#s">Branded Links</a>
              </li>
              <li>
                <a href="#s">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#s">Blog</a>
              </li>
              <li>
                <a href="#s">Developers</a>
              </li>
              <li>
                <a href="#s">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#s">About</a>
              </li>
              <li>
                <a href="#s">Our Team</a>
              </li>
              <li>
                <a href="#s">Careers</a>
              </li>
              <li>
                <a href="#s">Contact</a>
              </li>
            </ul>
          </div>
          <div className="media-icons">
            <IconFacebook />
            <IconTwitter />
            <Iconpinterest />
            <IconInstagram />
          </div>
        </footer>
      </div>
    </div>
  );
}
