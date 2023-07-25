import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiArrowUpRight } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import { IconContext } from "react-icons";
export const Service = ({
  props: {
    data: { title, description, bulletPoints, link, linkText, author,authorLink },
    image,
  },
}) => {
  
  return (
    <>
      <IconContext.Provider value={{ size: "20px" }}>
        <article>
          <div>
            <h2>{title}</h2>
            <span></span>
          </div>
          {description.split("\n").map((paragraph, index) => {
            return <p key={`paragraph_${index}`}>{paragraph}</p>;
          })}
          <IconContext.Provider value={{ color: "#4f4ad7", size: "20px" }}>
            <ul>
              {bulletPoints.map((entry, index) => {
                return (
                  <li key={`web-development-${index}`}>
                    <FiCheckSquare />
                    {entry}
                  </li>
                );
              })}
            </ul>
          </IconContext.Provider>

          <HashLink to={link} className="btn secondary-btn">
            {linkText}
            <FiArrowUpRight />
          </HashLink>
        </article>
        <article data-author={author} data-author-link={authorLink}>
          <img src={image} alt="" />
        </article>
      </IconContext.Provider>
    </>
  );
};
