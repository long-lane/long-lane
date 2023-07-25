import React, { useReducer } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import shortFormAnimation from "../../assets/img/short_form_animation.json";
import { shortFormHandler } from "../../helpers/FormHandler";
import { plansDescriptionData } from "../data/Data";
import { FormReducer } from "../../reducers/Reducers";
import { ThreeDots } from "react-loader-spinner";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export const ShortForm = ({ props: { plan, billingMethod } }) => {
  const [state, dispatch] = useReducer(FormReducer, {
    shortFormDelivery: null,
  });

  return (
    <article className="short-form" id="short-form">
      <Player autoplay loop speed="0.2" src={shortFormAnimation}>
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <div>
        <h3>ready to go?</h3>
        <p>
          the <span>{plan}</span> plan is a great choice to{" "}
          {
            plansDescriptionData.find((el) => el.name === plan)
              ?.description
          }
        </p>
        <form
          onSubmit={(ev) => {
            shortFormHandler(ev, dispatch);
          }}
        >
          <input name="plan" type="hidden" value={plan} />
          <input name="billingMethod" type="hidden" value={billingMethod} />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="on"
            required
            disabled={state.shortFormDelivery ? "disabled" : ""}
          />
          <button
            type="submit"
            disabled={state.shortFormDelivery ? "disabled" : ""}
          >
            {state.shortFormDelivery === "pending" ? (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="#4f4ad7"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName="animated-icon"
                visible={true}
              />
            ) : state.shortFormDelivery === "success" ? (
              <FiCheckCircle />
            ) : (
              <FiArrowUpRight />
            )}
          </button>
        </form>
      </div>
    </article>
  );
};
