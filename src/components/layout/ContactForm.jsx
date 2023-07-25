import React, { useReducer } from "react";
import { contactFormHandler } from "./../../helpers/FormHandler";
import { FormReducer } from "./../../reducers/Reducers";
import { ThreeDots } from "react-loader-spinner";
import {FiCheckCircle,FiArrowUpRight} from 'react-icons/fi'
export const ContactForm = () => {
  const [state, dispatch] = useReducer(FormReducer, {
    contactFormDelivery: null,
  });
  return (
    <form
      className="contact-form"
      onSubmit={(ev) => {
        contactFormHandler(ev, dispatch);
      }} autoComplete="on">
      <label htmlFor="name">
        <span>name</span>
        <input
          type="text"
          name="name"
          id="name"
          minLength="2"
          maxLength="30"          
          placeholder="Your name"
          required
          disabled={state.contactFormDelivery ? "disabled" : ""}
          autoComplete="on"
        />
      </label>
      <label htmlFor="email">
        <span>email</span>
        <input
          type="email"
          name="email"
          id="email"
          minLength="6"          
          placeholder="Your email address"
          required
          disabled={state.contactFormDelivery ? "disabled" : ""}
          autoComplete="on"
        />
      </label>
      <label htmlFor="message">
        <span>message</span>
        <textarea
          name="message"
          id="message"
          rows="10"
          columns="50"
          placeholder="Say hello! 👋"
          minLength="20"
          maxLength="400"
          required
          disabled={state.contactFormDelivery ? "disabled" : ""}
        />
      </label>
      <button
        type="submit"
        disabled={state.contactFormDelivery ? "disabled" : ""}
        aria-label="send message"
        >
       {state.contactFormDelivery === "pending" ? (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName="animated-icon"
                visible={true}
              />
            ) : state.contactFormDelivery === "success" ? (
              <FiCheckCircle />
            ) : (
              <FiArrowUpRight />
             
            )}
      </button>
    </form>
  );
};
