import React from "react";
import hero from "./../../assets/img/hero.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { HashLink } from "react-router-hash-link";
import { FiArrowUpRight } from "react-icons/fi";
import { IconContext } from "react-icons";

export const Hero = () => {
  return (
    <IconContext.Provider value={{ color: "#ffffff", size: "20px" }}>


    <section className="hero">
      <article>
        <span>your</span>
        <h1>digital journey</h1>
        <p>made easy</p>
        <HashLink to="#pricing" className="btn primary-btn">
          get started <FiArrowUpRight />
        </HashLink>

       
      </article>
      <article data-author='Rishi Ratan Mishra' data-author-link='https://lottiefiles.com/dg1yejrskijvlij9' >
      <Player autoplay loop speed="0.2" src={hero}>
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </article>
    </section>
    </IconContext.Provider>

  );

};
