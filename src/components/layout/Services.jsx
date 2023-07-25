import React from "react";
import { Service } from "./Service";
import { webDevelopmentData,digitalAnalyticsData } from "../data/Data";
import webDevelopmentImg from "./../../assets/img/web_development.webp";
import digitalAnalyticsImg from './../../assets/img/digital_analytics.webp'


export const Services = () => {
  

  return (
    <section className="services" id="services">
      <Service props={{data:webDevelopmentData, image:webDevelopmentImg}}/>
      <Service props={{data:digitalAnalyticsData, image:digitalAnalyticsImg}}/>
    </section>
  );
};
