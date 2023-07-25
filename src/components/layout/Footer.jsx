import React from "react";
import { Logo } from "./Logo";
import { ContactForm } from "./ContactForm";
import { HashLink } from "react-router-hash-link";
export const Footer = () => {
  return (
    <>
      <article id="contact">
        <h2>contact</h2>
        <ContactForm />
      </article>
      <article>
        <Logo props={{ textColor: "#EFEFEF", iconColor: "#EFEFEF" }} />
        <a href="mailto:hello@long-lane.co.uk">hello@long-lane.co.uk</a>
        <p>&copy; {new Date().getFullYear()} - Dundee</p>
      </article>
      <article>
        <HashLink to='/privacy-policy#policy'>Privacy Policy</HashLink>
        <p></p>
      </article>
    </>
  );
};
