import React from "react";
import { aboutUsData } from "../data/Data";
import aboutUsImg from "../../assets/img/about_us.webp";
import { HashLink } from "react-router-hash-link";
import { FiArrowUpRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

export const AboutUs = () => {
  const { title, description, link, linkText, author, authorLink } =
    aboutUsData;
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
    threshold: 0,
  });
  return (
    <section className="about-us" id="about-us" ref={ref}>
      <article className={inView ? "animate" : ""}>
        <h2>{title}</h2>
        {description.split("\n").map((paragraph, index) => {
          return <p key={`p-${index}`}>{paragraph}</p>;
        })}
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
        <img src={aboutUsImg} alt="" />
      </article>
    </section>
  );
};
