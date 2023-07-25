import React, { useEffect } from "react";
import { Hero } from "../layout/Hero";
import { Services } from "../layout/Services";
import { AboutUs } from "../layout/AboutUs";
import { Community } from "../layout/Community";
import { Pricing } from "../layout/Pricing";
import { Helmet } from "react-helmet-async";

export const Home = () => {
  useEffect(() => {
    rudderanalytics.page("Home");
  }, []);
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.long-lane.co.uk/" />
        <title>Long Lane</title>
      </Helmet>
      <Hero />
      <Services />
      <Pricing />
      <AboutUs />
      <Community />
    </>
  );
};
