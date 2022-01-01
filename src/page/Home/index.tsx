import React from "react";

import "./index.css";
import Header from "../../components/Header";
import IntroSection from "./intro_section";
import StatisticsSection from "./statistics_section";
import FooterSection from "./footer_section";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <StatisticsSection />
      <div className="bg-dark-violet">
        <section className="main-content">
          <h2>Boost your links today</h2>
          <button type="button">Get Started</button>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
