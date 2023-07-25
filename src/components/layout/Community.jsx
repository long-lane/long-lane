import React from "react";
import { communityData } from "../data/Data";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import communityAnimation from "./../../assets/img/community.json";
import { useInView } from "react-intersection-observer";

import { HashLink } from "react-router-hash-link";
import { FiArrowUpRight } from "react-icons/fi";

export const Community = () => {
  const { title, description, link, linkText, author, authorLink } =
    communityData;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
    threshold: 0,
  });
  return (
    <section className="community" id="community" ref={ref}>
      <article className={inView ? "animate" : ""}>
        <h2>{title}</h2>
        {description.split("\n").map((paragraph, index) => {
          return <p key={`p-${index}`}>{paragraph}</p>;
        })}{" "}
        <HashLink to={link} className="btn secondary-btn">
          {linkText}
          <FiArrowUpRight />
        </HashLink>
      </article>
      <article
        className={inView ? "animate" : ""}
        data-author={author}
        data-author-link={authorLink}
      >
        <Player autoplay loop speed="0.5" src={communityAnimation}>
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </article>
    </section>
  );
};
