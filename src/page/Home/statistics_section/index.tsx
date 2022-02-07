import React from "react";

import "./style.css";
import FormUrl from "../../../components/formUrl";
import IconBrandRecognition from "../../../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../../../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../../../images/icon-fully-customizable.svg";

export default function StatisticsSection() {
  return (
    <div className="bg-gray">
      <div className="main-content">
        <FormUrl />

        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <section className="statistics-section">
          <div className="card-content">
            <div className="card-icon">
              <img src={IconBrandRecognition} alt="icon-brand-recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <img src={IconDetailedRecords} alt="icon-brand-recognition" />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card-content">
            <div className="card-icon">
              <img src={IconFullyCustomizable} alt="icon-brand-recognition" />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverabillity throught
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
