import React from "react";

import "./style.css";
import IllustrationLogo from "../../../images/illustration-working.svg";

export default function IntroSection() {
  return (
    <div className="bg-white">
      <div className="main-content">
        <section className="intro-section">
          <div className="section-content">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <button type="button">Get Started</button>
          </div>
          <div className="section-content">
            <img
              src={IllustrationLogo}
              alt="ilustration-logo"
              className="illustation-logo"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
